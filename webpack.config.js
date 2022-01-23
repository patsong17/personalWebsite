const path = require("path");
const HTMLWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    output:{
        path:path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                },
            },
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, 
                use: ['url-loader?limit=100000'] 
            },

        ]
    },
    devServer: {
        port:3000,
        hot:true,
        historyApiFallback: true,

    },
    plugins: [
        new HTMLWebPackPlugin({
            template: "./src/index.html"
        })
    ]
};