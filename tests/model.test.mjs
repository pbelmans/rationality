import test from "node:test";
import assert from "node:assert/strict";

import { classify, referenceUrl, references } from "../static/js/model.js";

test("classical cubic cases remain distinct", () => {
  assert.equal(classify("rationality", 2, 3).status, "yes");
  assert.equal(classify("rationality", 3, 3).status, "no");
  assert.equal(classify("rationality", 4, 3).status, "very-general-no-known");
  assert.equal(classify("rationality", 5, 3).status, "open");
});

test("stable rationality records the cubic threefold preprint quantifier", () => {
  const result = classify("stable", 3, 3);
  assert.equal(result.status, "very-general-no");
  assert.match(result.statement, /very general/i);
  assert.deepEqual(result.refs, ["MR3646872", "2507.15704"]);
});

test("Ottem updates the quartic sixfold cell", () => {
  const result = classify("stable", 6, 4);
  assert.equal(result.status, "very-general-no");
  assert.ok(result.refs.includes("2609.10231"));
  assert.ok(result.methods.includes("unramified"));
});

test("rationality and stable rationality are not conflated", () => {
  assert.equal(classify("rationality", 3, 4).status, "no");
  assert.equal(classify("stable", 3, 4).status, "very-general-no");
});

test("unirational cubics can still be irrational", () => {
  assert.equal(classify("unirationality", 3, 3).status, "yes");
  assert.equal(classify("rationality", 3, 3).status, "no");
});

test("Fano and non-Fano rational connectedness are separated", () => {
  assert.equal(classify("connectedness", 6, 7).status, "yes");
  assert.equal(classify("connectedness", 6, 8).status, "no");
});

test("classifications expose the methods used by the table", () => {
  assert.deepEqual(classify("rationality", 3, 3).methods, ["intermediate-jacobian"]);
  assert.deepEqual(classify("unirationality", 8, 3).methods, ["secants"]);
  assert.ok(classify("stable", 8, 5).methods.includes("specialization"));
});

test("all references use the requested identifier scheme", () => {
  for (const reference of references) {
    if (reference.type === "preprint") {
      assert.match(reference.id, /^\d{4}\.\d{5}$/);
      assert.match(referenceUrl(reference), /arxiv\.org/);
    } else {
      assert.match(reference.id, /^MR\d{7}$/);
      assert.match(referenceUrl(reference), /mathscinet/);
    }
  }
});

test("invalid grid coordinates fail explicitly", () => {
  assert.throws(() => classify("rationality", 0, 3), RangeError);
  assert.throws(() => classify("unknown", 3, 3), RangeError);
});
