export const snapshotDate = "2026-09-10";

export const layers = {
  rationality: {
    label: "Rationality",
    legend: [
      { status: "yes", label: "all are rational" },
      { status: "no", label: "all are irrational" },
      { status: "very-general-no", label: "very general is irrational, rational ones unknown" },
      { status: "very-general-no-known", label: "very general is irrational, rational ones known" },
      { status: "open", label: "open problem" }
    ]
  },
  stable: {
    label: "Stable rationality",
    legend: [
      { status: "yes", label: "all are stably rational" },
      { status: "no", label: "none are stably rational" },
      { status: "very-general-no", label: "very general is not stably rational" },
      { status: "open", label: "open problem" }
    ]
  },
  unirationality: {
    label: "Unirationality",
    legend: [
      { status: "yes", label: "all are unirational" },
      { status: "no", label: "none are unirational" },
      { status: "open", label: "open problem" }
    ]
  },
  connectedness: {
    label: "Rational connectedness",
    legend: [
      { status: "yes", label: "all are rationally connected" },
      { status: "no", label: "none are rationally connected" }
    ]
  }
};

export const methods = [
  {
    id: "projection",
    name: "Projection and explicit parametrization",
    kind: "positive",
    summary:
      "Project from a rational point, singular point, or linear subspace and solve for the residual intersection."
  },
  {
    id: "secants",
    name: "Secants and tangent curves",
    kind: "positive",
    summary:
      "Use residual points on secant or tangent lines. This gives rational cubic surfaces and unirational smooth cubic hypersurfaces."
  },
  {
    id: "low-degree-curves",
    name: "Low-degree rational curves",
    kind: "positive",
    summary:
      "Study Fano schemes and families of rational curves to construct dominant parametrizations in high dimension."
  },
  {
    id: "canonical",
    name: "Canonical class and differential forms",
    kind: "obstruction",
    summary:
      "Pluricanonical forms obstruct uniruledness, hence unirationality and rationality, once the degree reaches the Calabi-Yau range."
  },
  {
    id: "intermediate-jacobian",
    name: "Intermediate Jacobian",
    kind: "obstruction",
    summary:
      "The principally polarized intermediate Jacobian obstructs rationality of every smooth cubic threefold."
  },
  {
    id: "rigidity",
    name: "Noether-Fano and birational rigidity",
    kind: "obstruction",
    summary:
      "Maximal singularities rule out alternative Mori fibre structures, proving irrationality of index-one hypersurfaces."
  },
  {
    id: "diagonal",
    name: "Decomposition of the diagonal",
    kind: "stable obstruction",
    summary:
      "Stable or retract rationality forces universal CH0-triviality and an integral decomposition of the diagonal."
  },
  {
    id: "specialization",
    name: "Specialization and characteristic p",
    kind: "stable obstruction",
    summary:
      "Degenerate to a singular fibre with differential forms or unramified cohomology, then control zero-cycles on a resolution."
  },
  {
    id: "motivic",
    name: "Motivic and tropical degeneration",
    kind: "stable obstruction",
    summary:
      "Nearby fibres, stable birational volume, and polyhedral subdivisions detect failure of stable rationality."
  },
  {
    id: "hodge-matroids",
    name: "Integral Hodge classes and matroids",
    kind: "new preprint method",
    summary:
      "Degenerations, monodromy, and regular matroids detect the minimal class on intermediate Jacobians of cubic threefolds."
  },
  {
    id: "quantum-hodge",
    name: "Hodge atoms and quantum multiplication",
    kind: "new preprint method",
    summary:
      "Birational invariants combining Hodge structures with quantum data are applied to cubic fourfolds."
  }
];

export const references = [
  {
    id: "MR0302652",
    authors: "C. Herbert Clemens and Phillip A. Griffiths",
    title: "The intermediate Jacobian of the cubic threefold",
    year: 1972,
    venue: "Ann. of Math. (2) 95, 281-356",
    methods: ["intermediate-jacobian"],
    topics: ["rationality", "cubic threefold"]
  },
  {
    id: "MR0291172",
    authors: "V. A. Iskovskikh and Yu. I. Manin",
    title: "Three-dimensional quartics and counterexamples to the Luroth problem",
    year: 1971,
    venue: "Mat. Sb. (N.S.) 86(128), 140-166",
    methods: ["rigidity"],
    topics: ["rationality", "quartic threefold"]
  },
  {
    id: "MR1273416",
    authors: "Janos Kollar",
    title: "Nonrational hypersurfaces",
    year: 1995,
    venue: "J. Amer. Math. Soc. 8, 241-249",
    methods: ["specialization"],
    topics: ["rationality", "very general"]
  },
  {
    id: "MR1646558",
    authors: "Joe Harris, Barry Mazur, and Rahul Pandharipande",
    title: "Hypersurfaces of low degree",
    year: 1998,
    venue: "Duke Math. J. 95, 125-160",
    methods: ["low-degree-curves"],
    topics: ["unirationality"]
  },
  {
    id: "MR1956057",
    authors: "Janos Kollar",
    title: "Unirationality of cubic hypersurfaces",
    year: 2002,
    venue: "J. Inst. Math. Jussieu 1, 467-476",
    methods: ["secants"],
    topics: ["unirationality", "cubics"]
  },
  {
    id: "MR0460349",
    authors: "Yu. I. Manin",
    title: "Cubic forms: algebra, geometry, arithmetic",
    year: 1974,
    venue: "North-Holland Mathematical Library 4",
    methods: ["secants"],
    topics: ["unirationality", "cubics"]
  },
  {
    id: "MR3049929",
    authors: "Tommaso de Fernex",
    title: "Birationally rigid hypersurfaces",
    year: 2013,
    venue: "Invent. Math. 192, 533-566",
    methods: ["rigidity"],
    topics: ["rationality", "index one"]
  },
  {
    id: "MR1650332",
    authors: "Aleksandr V. Pukhlikov",
    title: "Birational automorphisms of Fano hypersurfaces",
    year: 1998,
    venue: "Invent. Math. 134, 401-426",
    methods: ["rigidity"],
    topics: ["rationality", "Fano hypersurfaces"]
  },
  {
    id: "MR3968870",
    authors: "Michele Bolognesi, Francesco Russo, and Giovanni Stagliano",
    title: "Some loci of rational cubic fourfolds",
    year: 2019,
    venue: "Math. Ann. 373, 165-190",
    methods: ["secants"],
    topics: ["rationality", "cubic fourfold"]
  },
  {
    id: "MR3481353",
    authors: "Jean-Louis Colliot-Thelene and Alena Pirutka",
    title: "Hypersurfaces quartiques de dimension 3: non-rationalite stable",
    year: 2016,
    venue: "Ann. Sci. Ecole Norm. Sup. (4) 49, 371-397",
    methods: ["diagonal", "specialization"],
    topics: ["stable rationality", "quartic threefold"]
  },
  {
    id: "MR3486175",
    authors: "Burt Totaro",
    title: "Hypersurfaces that are not stably rational",
    year: 2016,
    venue: "J. Amer. Math. Soc. 29, 883-891",
    methods: ["diagonal", "specialization"],
    topics: ["stable rationality", "hypersurfaces", "very general"]
  },
  {
    id: "MR3646872",
    authors: "Claire Voisin",
    title: "On the universal CH0 group of cubic hypersurfaces",
    year: 2017,
    venue: "J. Eur. Math. Soc. 19, 1619-1653",
    methods: ["diagonal", "intermediate-jacobian"],
    topics: ["stable rationality", "cubic hypersurfaces"]
  },
  {
    id: "MR3987174",
    authors: "Johannes Nicaise and Evgeny Shinder",
    title: "The motivic nearby fiber and degeneration of stable rationality",
    year: 2019,
    venue: "Invent. Math. 217, 377-413",
    methods: ["motivic"],
    topics: ["stable rationality", "specialization"]
  },
  {
    id: "MR3987175",
    authors: "Maxim Kontsevich and Yuri Tschinkel",
    title: "Specialization of birational types",
    year: 2019,
    venue: "Invent. Math. 217, 415-432",
    methods: ["motivic", "specialization"],
    topics: ["rationality", "stable rationality", "specialization"]
  },
  {
    id: "MR4013741",
    authors: "Stefan Schreieder",
    title: "Stably irrational hypersurfaces of small slopes",
    year: 2019,
    venue: "J. Amer. Math. Soc. 32, 1171-1199",
    methods: ["diagonal", "specialization"],
    topics: ["stable rationality", "very general"]
  },
  {
    id: "MR4497222",
    authors: "Johannes Nicaise and John Christian Ottem",
    title: "Tropical degenerations and stable rationality",
    year: 2022,
    venue: "Duke Math. J. 171, 3023-3075",
    methods: ["motivic"],
    topics: ["stable rationality", "tropical"]
  },
  {
    id: "MR4383702",
    authors: "Johannes Nicaise and John Christian Ottem",
    title: "A refinement of the motivic volume, and specialization of birational types",
    year: 2021,
    venue: "Rationality of varieties, Progr. Math. 342, 291-322",
    methods: ["motivic", "specialization"],
    topics: ["rationality", "stable rationality"]
  },
  {
    id: "MR4226988",
    authors: "Stefan Schreieder",
    title: "Torsion orders of Fano hypersurfaces",
    year: 2021,
    venue: "Algebra Number Theory 15, 241-270",
    methods: ["diagonal"],
    topics: ["stable rationality", "unirationality", "Fano hypersurfaces"]
  },
  {
    id: "MR4673396",
    authors: "Nebojsa Pavic and Stefan Schreieder",
    title: "The diagonal of quartic fivefolds",
    year: 2023,
    venue: "Algebr. Geom. 10, 754-778",
    methods: ["diagonal"],
    topics: ["stable rationality", "quartic fivefold"]
  },
  {
    id: "2409.12834",
    type: "preprint",
    authors: "Jan Lange and Stefan Schreieder",
    title: "On the rationality problem for low degree hypersurfaces",
    year: 2025,
    note: "arXiv v2",
    methods: ["diagonal", "specialization"],
    topics: ["stable rationality", "very general", "unirationality"]
  },
  {
    id: "1903.02481",
    type: "preprint",
    authors: "Roya Beheshti and Eric Riedl",
    title: "Linear subspaces of hypersurfaces",
    year: 2020,
    note: "arXiv v2",
    methods: ["low-degree-curves"],
    topics: ["unirationality", "linear spaces", "hypersurfaces"]
  },
  {
    id: "2507.15704",
    type: "preprint",
    authors: "Philip Engel, Olivier de Gaay Fortman, and Stefan Schreieder",
    title: "Matroids and the integral Hodge conjecture for abelian varieties",
    year: 2026,
    note: "arXiv v3",
    methods: ["hodge-matroids", "diagonal"],
    topics: ["stable rationality", "cubic threefold"]
  },
  {
    id: "2508.05105",
    type: "preprint",
    authors: "Ludmil Katzarkov, Maxim Kontsevich, Tony Pantev, and Tony Yue Yu",
    title: "Birational invariants from Hodge structures and quantum multiplication",
    year: 2026,
    note: "arXiv v2",
    methods: ["quantum-hodge"],
    topics: ["rationality", "cubic fourfold"]
  },
  {
    id: "MR1191735",
    authors: "Frederic Campana",
    title: "Connexite rationnelle des varietes de Fano",
    year: 1992,
    venue: "Ann. Sci. Ecole Norm. Sup. (4) 25, 539-545",
    methods: ["low-degree-curves"],
    topics: ["rational connectedness", "Fano varieties"]
  },
  {
    id: "MR1189503",
    authors: "Janos Kollar, Yoichi Miyaoka, and Shigefumi Mori",
    title: "Rational connectedness and boundedness of Fano manifolds",
    year: 1992,
    venue: "J. Differential Geom. 36, 765-779",
    methods: ["low-degree-curves"],
    topics: ["rational connectedness", "Fano varieties"]
  }
];

const result = (status, headline, statement, refs = [], methodIds = []) => ({
  status,
  headline,
  statement,
  refs,
  methods: methodIds
});

function rationality(n, d) {
  if (d <= 2) {
    return result("yes", "Rational", "Every smooth complex hypersurface in this cell is rational.", [], ["projection"]);
  }
  if (n === 1) {
    return result("no", "Irrational", "Every smooth plane curve of degree at least 3 has positive genus and is irrational.", [], ["canonical"]);
  }
  if (d >= n + 2) {
    return result("no", "Irrational", "Every smooth hypersurface in this cell is not uniruled, hence not rational.", [], ["canonical"]);
  }
  if (d === 3 && n === 2) {
    return result("yes", "Rational", "Every smooth complex cubic surface is rational.", [], ["secants"]);
  }
  if (d === 3 && n === 3) {
    return result("no", "Irrational", "Every smooth complex cubic threefold is irrational.", ["MR0302652"], ["intermediate-jacobian"]);
  }
  if (d === 3 && n === 4) {
    return result(
      "very-general-no-known",
      "Very general is irrational, rational ones known",
      "A 2026 preprint proves that a very general cubic fourfold is irrational. Special rational cubic fourfolds are known, and stable rationality of a very general member remains open.",
      ["2508.05105", "MR3968870"],
      ["quantum-hodge"]
    );
  }
  if (d === n + 1 && n >= 3) {
    return result(
      "no",
      "Irrational",
      "Every smooth index-one hypersurface of dimension at least 3 is birationally rigid, hence irrational.",
      ["MR0291172", "MR1650332", "MR3049929"],
      ["rigidity"]
    );
  }
  if (d >= 2 * Math.ceil((n + 3) / 3)) {
    return result(
      "very-general-no",
      "Very general is irrational, rational ones unknown",
      "A very general hypersurface in this cell is not ruled, hence irrational. No smooth rational examples are known.",
      ["MR1273416"],
      ["specialization"]
    );
  }
  const special = d === 3 && n >= 4 && n % 2 === 0
    ? " Special rational examples arise in even dimension from suitable linear spaces."
    : "";
  return result(
    "open",
    "Open problem",
    "The rationality of a very general member is open." + special
  );
}

function stableRationality(n, d) {
  if (d <= 2 || (n === 2 && d === 3)) {
    return result("yes", "Stably rational", "Every smooth hypersurface in this cell is rational, hence stably rational.", [], ["projection", "secants"]);
  }
  if (n === 1 || d >= n + 2) {
    return result("no", "Not stably rational", "Every smooth hypersurface in this cell is irrational for a stable birational reason.", [], ["canonical"]);
  }
  if (n === 3 && d === 3) {
    return result(
      "very-general-no",
      "Very general is not stably rational",
      "A 2026 preprint proves that a very general cubic threefold has no integral decomposition of the diagonal. The statement is not known for every smooth cubic threefold.",
      ["MR3646872", "2507.15704"],
      ["hodge-matroids", "diagonal"]
    );
  }
  if (d >= 4 && n <= (d + 1) * 2 ** (d - 4)) {
    return result(
      "very-general-no",
      "Very general member not stably rational",
      "A very general hypersurface in this range has no decomposition of the diagonal, hence is neither retract nor stably rational.",
      ["MR3486175", "MR3987174", "MR3987175", "MR4013741", "MR4226988", "MR4383702", "MR4497222", "MR4673396", "2409.12834"],
      ["diagonal", "specialization"]
    );
  }
  if (d >= Math.log2(n) + 2) {
    return result(
      "very-general-no",
      "Very general member not stably rational",
      "The logarithmic small-slope bound obstructs stable rationality for a very general hypersurface.",
      ["MR3486175", "MR4013741", "MR4226988"],
      ["diagonal", "specialization"]
    );
  }
  return result(
    "open",
    "Stable rationality open",
    "Stable rationality is open for a very general member."
  );
}

function factorial(value) {
  let product = 1;
  for (let i = 2; i <= value; i += 1) product *= i;
  return product;
}

function unirationality(n, d) {
  if (d <= 2) {
    return result("yes", "Unirational", "Every smooth hypersurface in this cell is rational, hence unirational.", [], ["projection"]);
  }
  if (n === 1 || d >= n + 2) {
    return result("no", "Not unirational", "Every smooth hypersurface in this cell is not uniruled, hence not unirational.", [], ["canonical"]);
  }
  if (d === 3) {
    return result(
      "yes",
      "Unirational",
      "Every smooth complex cubic hypersurface of dimension at least 2 is unirational.",
      ["MR0460349", "MR1956057"],
      ["secants"]
    );
  }
  if (d === 4 && n >= 6) {
    return result(
      "yes",
      "Unirational",
      "Every smooth complex quartic hypersurface of dimension at least 6 is unirational.",
      ["MR1646558"],
      ["low-degree-curves"]
    );
  }
  if (2 * factorial(d) <= n + 1) {
    return result(
      "yes",
      "Unirational",
      "The high-dimensional low-degree criterion proves every smooth member unirational.",
      ["MR1646558", "1903.02481", "2409.12834"],
      ["low-degree-curves"]
    );
  }
  return result(
    "open",
    "Unirationality open",
    "Unirationality is open for a very general member."
  );
}

function rationalConnectedness(n, d) {
  if (d <= n + 1) {
    return result(
      "yes",
      "Rationally connected",
      "Every smooth complex Fano hypersurface is rationally connected.",
      ["MR1191735", "MR1189503"],
      ["low-degree-curves"]
    );
  }
  return result(
    "no",
    "Not rationally connected",
    "A smooth hypersurface in this cell has nonnegative canonical class and is not rationally connected.",
    [],
    ["canonical"]
  );
}

export function classify(layer, n, d) {
  if (!Number.isInteger(n) || !Number.isInteger(d) || n < 1 || d < 1) {
    throw new RangeError("Dimension and degree must be positive integers.");
  }
  const classifiers = {
    rationality,
    stable: stableRationality,
    unirationality,
    connectedness: rationalConnectedness
  };
  if (!classifiers[layer]) throw new RangeError(`Unknown layer: ${layer}`);
  return classifiers[layer](n, d);
}

export function referenceUrl(reference) {
  return reference.type === "preprint"
    ? `https://arxiv.org/abs/${reference.id}`
    : `https://mathscinet.ams.org/mathscinet-getitem?mr=${reference.id}`;
}
