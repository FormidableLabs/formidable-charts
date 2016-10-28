/**
 * Test setup for client-side tests.
 *
 * Intended for:
 * - Karma tests: `builder run test-frontend`
 * - Browser tests: `http://localhost:3000/test/client/test.html`
 */
/*globals window:false*/
const chai = require("chai");
const sinonChai = require("sinon-chai");

// --------------------------------------------------------------------------
// Chai / Sinon / Mocha configuration.
// --------------------------------------------------------------------------
// Exports
window.expect = chai.expect;

// Plugins
chai.use(sinonChai);

// Mocha (part of static include).
window.mocha.setup({
  ui: "bdd",
  bail: false,
  timeout: 5000
});

// --------------------------------------------------------------------------
// Bootstrap
// --------------------------------------------------------------------------
// Use webpack to include all app code _except_ the entry point so we can get
// code coverage in the bundle, whether tested or not.
const srcReq = require.context("src", true, /\.js?$/);
srcReq.keys().filter((d) => {
  return d.indexOf(".ios.") === -1 && d.indexOf(".android.") === -1;
}).map(srcReq);

// Use webpack to infer and `require` tests automatically.
const testsReq = require.context(".", true, /\.spec.js?$/);
testsReq.keys().map(testsReq);

// Only start mocha in browser.
if (!window.__karma__) {
  window.mocha.run();
}
