var merge = require('merges-utils')
var base = require('./webpack.base.js')
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devServer:{ //我们在这里对webpack-dev-server进行配置
        //contentBase:path.join(__dirname,"dist"), //在哪个路径里启动 server
        host:'0.0.0.0',
        /*
         *historyApiFallback:{ //这个对单页面的程序的history api 的404 起作用
         *    rewrites:[{
         *        from:/./,
         *        to:'/'
         *    }]
         *},
         */
        overlay: true, //错误会显示在html页面上
        historyApiFallback: true,
        stats: "errors-only", //编译的输出
    },
    devtool: '#eval-source-map'
}


var module_rules=[
    {
        test: /\.scss$/, 
        use:[
            { loader:'style-loader'},
            { loader:'css-loader'},
            { 
                loader:'sass-loader',
                options:{
                    implementation:require("sass")
                }
            }
        ],
    }
]

var res = merge([base, config]);


var plugins = [

        new HtmlWebpackPlugin({
            title:'your_title',
            template: path.join(__dirname,'../src/index.html'), //模板地址
            filename:'index.html'
        })
]

res.plugins = res.plugins.concat(plugins)

res.module.rules =  res.module.rules.concat( module_rules)

module.exports = res
