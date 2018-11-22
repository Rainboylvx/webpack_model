
var merge = require('merges-utils')
var base = require('./webpack.base.js')
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config =  {
    externals: {
        vue:"Vue"
    }
}

var res = merge([base, config]);

var plugins = [
    new HtmlWebpackPlugin({
        title:'your_title',
        template: path.join(__dirname,'../src/index.html'), //模板地址
        filename:'index.html'
    }),
    new ExtractTextPlugin('css/app.css'),
]


var module_rules = [
    {
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
            fallback:'style-loader',
            use: [
                { loader:'css-loader'},
                { 
                    loader:'sass-loader',
                    options:{
                        implementation:require("sass")
                    }
                }
            ],
            publicPath:'../' //解决css图片中的路径问题
        })
    },
]


res.plugins = res.plugins.concat(plugins)

res.module.rules =  res.module.rules.concat( module_rules)

module.exports = res
