var webpack = require('webpack');
var path = require('path');
var project = require('./project');
var publicPath = path.resolve(__dirname, '../public/'+project);
var deps = require('../package.json').dependencies;

module.exports = {
    entry: {
        'react': Object.keys(deps)
    },
    output: {
        path: publicPath,
        filename: '[name].dll.js',
        library: '[name]_library',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../public/'+project+'/[name]-manifest.json'),
            name: '[name]_library',
        }),
    ],
    debug: true
}