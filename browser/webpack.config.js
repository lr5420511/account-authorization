'use strict';

const [resolve, VueLoader, ExtractTextWP, UglifyjsWP] = [
    require('path').resolve,
    require('vue-loader/lib/plugin'),
    require('extract-text-webpack-plugin'),
    require('uglifyjs-webpack-plugin')
];

const prod = /^production$/i.test(process.env.NODE_ENV);

const conf = module.exports = {
    entry: {
        'account-authorization': './src/app.js'
    },
    output: {
        path: resolve(__dirname, '../server/app/public/dist'),
        publicPath: 'dist',
        filename: '[name].js'
    },
    devtool: prod ? false : 'source-map',
    devServer: { historyApiFallback: { index: './index.html' } },
    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: ['babel-loader'],
                exclude: /node_modules/i
            },
            {
                test: /\.vue$/i,
                loader: ['vue-loader']
            },
            {
                test: /\.css$/i,
                loader: prod ? ExtractTextWP.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                }) : ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/i,
                loader: prod ? ExtractTextWP.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                }) : ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(?:png|svg|gif|ico|jp(?:e?g|e))/i,
                loader: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: prod ? '/resource' : '',
                            name: '[name]-[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(?:eot|ttf|woff2?)$/i,
                loader: ['url-loader']
            }
        ]
    },
    plugins: [new VueLoader()]
};

if(prod) {
    conf.plugins.push(new ExtractTextWP('account-authorization.css'));
    conf.optimization = {
        minimizer: [
            new UglifyjsWP({
                sourceMap: false,
                test: /\.js$/i
            })
        ]
    };
}