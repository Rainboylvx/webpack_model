const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        publicPath:'/dist/',    //公用路径,会影响css里的路径,同样production的时候转成cdn很好用
        path:path.join(__dirname,'dist')
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('css/app.css'),
        new HtmlWebpackPlugin({
            title:'Hello World',
            template: './src/index.html', //模板地址
            filename:'../index.html'
        }),
    ],
    module:{
        rules:[
            { 
                test: /\.styl$/, 
                use: ExtractTextPlugin.extract({
                    use: [ 'css-loader', 'stylus-loader' ],
                    publicPath:'../' //解决css图片中的路径问题
                })
                //loader: 'style-loader!css-loader!stylus-loader' 
            },
            {
                test:/\.(png|jpg|gif)$/,
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
    devServer:{ //我们在这里对webpack-dev-server进行配置
        contentBase:'./', //在哪个路径里启动 server
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
        stats: "errors-only", //编译的输出
    }
}
