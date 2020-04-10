// This file isn't transpiled, so muse use CommonJs and Es5

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't support
// require.extentions['.css'] = function () {
//
// }

// in index.js we used .css that webpack understands but mocha doesn't so if it seets it, it'll now treat it as an empty function

