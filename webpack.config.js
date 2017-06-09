var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: 'index.tsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions:  ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        // Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
        modulesDirectories: ['src', 'node_modules'],
    },
    devtool: "source-map",
    module: {
            loaders: [
                {
                    test: /\.tsx?/,
                    include: APP_DIR,
                    loaders: ['babel', 'ts-loader']
                }
                ]

        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]

    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};


module.exports = config;