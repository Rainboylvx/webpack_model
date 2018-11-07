module.exports = {
    plugins:[],
    module:{
        rules:[
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
    },
}
