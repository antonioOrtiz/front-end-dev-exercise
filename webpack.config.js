var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: ['./src/js/app.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/app.bundle.js',
        // publicPath: '/public' commented out because of BrowserSyncPlugin i.e. BrowserSync or the devServer obj, see next line
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 8888
    },
    module: {
        rules: [{
                test: /\.es6$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: 'html-loader',
            }, 
            // {
            //     test: /\.scss$/,
            //     loader: 'style-loader!css-loader!sass-loader',
            //     include: path.join(__dirname, 'src')
            // },
             {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                }) 
             },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                },
                include: path.join(__dirname, 'src')
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css'),
        new BrowserSyncPlugin(
            // BrowserSync options 
            {
                // browse to http://localhost:3000/ during development 
                host: 'localhost',
                port: 3000,
                files: ['./src/*.html'],
                proxy: 'http://localhost:8888/',
                // plugin options 
                // prevent BrowserSync from reloading the page 
                // and let Webpack Dev Server take care of this 
                reload: true
            }
        ),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}
