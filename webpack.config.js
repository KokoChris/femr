const path = require('path');

module.exports = {
    context: __dirname,
    entry: './js/ClientApp.js',
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/public/',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            }
        ]
    }
}