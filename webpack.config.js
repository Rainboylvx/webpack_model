const path = require("path");
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        publicPath:'/dist/',
        path:path.join(__dirname,'dist')
    },
    devServer:{
        //我们在这里对webpack-dev-server进行配置
        contentBase:'./',
        host:'0.0.0.0',
        //historyApiFallback:{
            //rewrites:[{
                //from:/./,
                //to:'/'
            //}]
        //},
        overlay: true,
        stats: "errors-only",
    }
}
