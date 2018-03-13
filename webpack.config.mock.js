/* jshint ignore:start */
var path = require('path');
var webpack = require("webpack");
var devConfig = require('./webpack.config');

// var exec = require('child_process').exec,
//     child;
//
// child = exec('npm run json-server',
//     function (error, stdout, stderr) {
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//         if (error !== null) {
//             console.log('exec error: ' + error);
//         }
//     });

devConfig['devServer'] =  {
    proxy: {
        '/api/*':{target: 'http://localhost:3000/',
        pathRewrite: {
            '/api' : ''
        }
        }
    },
    noInfo: false
};


devConfig.output.publicPath = '/';

module.exports = devConfig;

/* jshint ignore:end */
