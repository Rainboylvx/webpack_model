
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = 
    {
        plugins:[
            new ExtractTextPlugin('css/app.css'),
        ],
        module:{
            rules:[
                { 
                    test: /\.css$/, 
                    use: ExtractTextPlugin.extract({
                        use: [ 'css-loader'],
                        publicPath:'../' //解决css图片中的路径问题
                    })
                },
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
        }
    }