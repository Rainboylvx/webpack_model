const path = require("path");

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        publicPath:'/dist/',    //公用路径,会影响css里的路径,同样production的时候转成cdn很好用
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            {
                test: /\.(png|jpg)$/,
                //loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]",
                loader: "url-loader?limit=1&name=images/[hash:8].[name].[ext]",
                options:{
                    publicPath:'./images'
                }
                //limit参数，代表如果小于大约4k则会自动帮你压缩成base64编码的图片,否则拷贝文件到生产目录
                //name后面是打包后的路径；
                //loader 后面 limit 字段代表图片打包限制，这个限制并不是说超过了就不能打包，而是指当图片大小小于限制时会自动转成 base64 码引用
                //上例中大于8192字节的图片正常打包，小于8192字节的图片以 base64 的方式引用。
            }

        ]
    },
    devServer:{ //我们在这里对webpack-dev-server进行配置
        contentBase:'./', //在哪个路径里启动 server
        host:'0.0.0.0',
        //historyApiFallback:{ //这个对单页面的程序的history api 的404 起作用
            //rewrites:[{
                //from:/./,
                //to:'/'
            //}]
        //},
        overlay: true, //错误会显示在html页面上
        stats: "errors-only", //编译的输出
    }
}
