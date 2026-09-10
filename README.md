# rationality.info

A reference for rationality questions about smooth complex hypersurfaces. The
overview is indexed by dimension and degree, and separates
rationality, stable rationality, unirationality, and rational connectedness.

The visual starting point is the compact table on page 4 of Olivier Debarre's
[On rationality problems](https://perso.imj-prg.fr/olivier-debarre/wp-content/uploads/sites/34/2023/02/On-rationality-problems-copie.pdf).
The site follows [mgnbar.info](https://mgnbar.info).

## Development

```sh
hugo server
```

Run the data-model tests and production build with:

```sh
npm test
npm run build
```

Results are encoded in `static/js/model.js`. Every classification carries its
quantifier, supporting references, and methods. Published articles use
MathSciNet identifiers; current preprints use arXiv identifiers.
