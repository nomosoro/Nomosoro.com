var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/scripts.js',
    output: {
        path: __dirname + "/dist/",
        filename: 'js/nomosoro.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Nomosoro - Game and Game Developement",
        hash: true,
        template: './src/index.ejs'
    })]
}
