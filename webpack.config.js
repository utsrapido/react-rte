/*eslint-env node */
var path = require('path');
var webpack = require('webpack');

var rules = [
    {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
    },
    {
        test: /\.css$/,
        exclude: /\.global\.css$/,
        use: [
            {
                loader: 'style-loader',
                options: {sourceMap: true},
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: true,

                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            },
        ],
    },
    {
        test: /\.scss$/,
        use: [
            {
                loader: 'style-loader',
                options: {sourceMap: true},
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            },
            {
                loader: 'sass-loader',
            },
        ]
    },
    {
        test: /\.global\.css$/,
        use: ['style-loader', 'raw-loader'],
    },
];

module.exports = [{
    entry: [
        './src/RichTextEditor.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-rte.js',
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    module: {
        rules: rules,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
}, {
    devtool: 'source-map',
    entry: './src/demo.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'demo.js',
    },
    module: {
        rules: rules,
    },
}];
