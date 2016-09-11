/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap/dist/js/bootstrap.min.js',
      'jquery/dist/jquery.js',
      'font-awesome/css/font-awesome.min.css',
      'font-awesome/fonts/*'
    ]
  });
};
