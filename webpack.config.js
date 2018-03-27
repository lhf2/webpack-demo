const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BabiliPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    //自动校测文件大小
    performance: {
        hints: 'warning', // 'error'
        maxEntrypointSize: 100000, // bytes
        maxAssetSize: 450000, // bytes
    },
    //入口文件
    entry:{
        vendor:['./css/index.css','./js/jquery.js'],
        1: ['./css/1.css','./js/1.js'],
        2: ['./css/2.css','./js/2.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//必须使用绝对文件，输出文件夹
        filename: "js/[name].js",//打包之后输出文件的文件名
        //publicPath:'dist/'//知道如何寻找资源
    },
    //devtool:'source-map',//是调试更容易
    devServer: {
        hot: true//webpack2是hotOnly:true hmr的配置
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test:/\.js$/,//js文件才使用babel
                loader: 'babel-loader',//使用哪个loader
                query: {
                    presets: ['es2015']
                },
                exclude:/node_modules/,//不包括路径
            },
            {
                //图片格式正则
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[
                    {
                        loader:'url-loader',
                        //配置url-loader的可选项
                        options:{
                            //限制图片大小2000B 小于限制会将图片转换为base64格式 1M = 1024KB 1KB =1024字节 一般用10k 数值是100000 因为vue限制为10k
                            limit:2000000,
                            //超出限制，创建的文件格式
                            //bulid/images/[图片名].[hash].[图片格式]
                            name:'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'//方便处理html里面加载的img标签
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
                loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'//处理字体图标
            },
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./1.html',
            filename:'1.html',
            inject:'body',
            chunks:['vendor','1']
        }),
        new htmlWebpackPlugin({
            template:'./2.html',
            filename:'2.html',
            inject:'body',
            chunks:['vendor','2']
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                optimization:{
                    splitChunks: {
                        minSize: 1,
                        chunks: "initial",
                        name:"vendor"
                    }
                }
            }
        }),
        new ExtractTextPlugin('./css/[name].css'),//把写到js里的css文件分离出来 共用的css跟自己独立的css都能被加载
        new webpack.HotModuleReplacementPlugin(),//热加载 如果不加载这个插件 就在package.json里设置hmr命令为webpack-dev-server --hot也可以
        new BabiliPlugin(),//压缩文件 使用这个插件必须把devtool的配置去掉 会报错
    ]
}