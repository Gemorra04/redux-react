/* jshint ignore:start */
var path = require('path');
var webpack = require("webpack");
var devConfig = require('./webpack.config');


devConfig.output.publicPath = '/';

module.exports = devConfig;

/* jshint ignore:end */
