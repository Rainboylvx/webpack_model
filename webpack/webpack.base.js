const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const _dir = __dirname

module.exports = {
    mode:'development',
    entry:path.join(_dir,'../src/main.js'),
    output:{
        filename:'bundle.js',
        publicPath:'/',    //公用路径,会影响css里的路径,同样production的时候转成cdn很好用
        path: path.resolve(__dirname, '../dist'),

    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },      
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test:/\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
                use:[{
                    loader:'url-loader',
                    options:{ // 这里的options选项参数可以定义多大的图片转换为base64
                        limit:16*1024, // 表示小于16kb的图片转为base64,大于50kb的是路径
                        outputPath:'images', //定义输出的图片文件夹
                        name:'[name].[ext]'
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@':path.resolve(__dirname, '../src')
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
}
