const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      { parser: { system: false } }
    ]
  },
  externals: {
    "rxjs": "rxjs",
    "@angular/core": "ng.core",
    "@angular/common": "ng.common",
    "@angular/platform-browser": "ng.platformBrowser",
    "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
    "@angular/compiler": "ng.compiler"
  }
};
