const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: ['./css/main.css','./js/index.js', './css/reset.css', './css/customer.css', './js/customer.js', './js/foot.js', './css/foot.css', './js/cityJson.js', './js/jquery-airselector.js', './css/selector.css', './js/head.js', './css/head.css', './js/Verification.js'],
        companyProfile: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/companyProfile.css'],
        customTravel: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/customTravel.css', './css/customer.css', './js/customer.js'],
        gobalVsia: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/common1.css', './css/gobalVsia.css','./js/gobalVsia.js'],
        help: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css'],
        insuranceVisa: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/insuranceVisa.css', './css/customer.css', './js/customer.js'],
        offshoreHotel: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/offshoreHotel.css'],
        overseasTourism: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/overseasTourism.css', "./js/overseasTourism.js"],
        personalHomePage: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/personalHomePage.css'],
        studentTicket: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/studentTicket.css', './css/customer.css', './js/customer.js'],
        inlandAirTicket: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/inlandAirTicket.css', './css/customer.css', './js/customer.js', './js/cityJson.js', './js/jquery-airselector.js', './css/selector.css'],
        roundTrip: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/roundTtrip.css', './js/cityJson.js', './js/jquery-airselector.js', './css/selector.css'],
        personalInformation: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './js/Verification.js', './css/personalInformation.css', './js/personalInformation.js'],
        makevisa: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './css/makevisa.css', './js/makevisa.js'],
        visaInformation: ['./css/reset.css', './js/foot.js', './css/foot.css', './js/head.js', './css/head.css', './js/visaInformation.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=10000&name=images/[name].[ext]'
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
                loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
            },
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            chunks: ['index'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'login.html',
            filename: 'login.html',
            chunks: ['index'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'register.html',
            filename: 'register.html',
            chunks: ['index'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'contactUs.html',
            filename: 'contactUs.html',
            chunks: ['index'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'aboutUs.html',
            filename: 'aboutUs.html',
            chunks: ['index'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'bookingInstructions.html',
            filename: 'bookingInstructions.html',
            chunks: ['index'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'companyProfile.html',
            filename: 'companyProfile.html',
            chunks: ['companyProfile'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'customTravel.html',
            filename: 'customTravel.html',
            chunks: ['customTravel'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'feedback.html',
            filename: 'feedback.html',
            chunks: ['customTravel'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'glory.html',
            filename: 'glory.html',
            chunks: ['customTravel'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'glory1.html',
            filename: 'glory1.html',
            chunks: ['customTravel'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'gobalVsia.html',
            filename: 'gobalVsia.html',
            chunks: ['gobalVsia'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'help.html',
            filename: 'help.html',
            chunks: ['help'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'insuranceVisa.html',
            filename: 'insuranceVisa.html',
            chunks: ['insuranceVisa'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'offshoreHotel.html',
            filename: 'offshoreHotel.html',
            chunks: ['offshoreHotel'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'overseasTourism.html',
            filename: 'overseasTourism.html',
            chunks: ['overseasTourism'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'personalHomePage.html',
            filename: 'personalHomePage.html',
            chunks: ['personalHomePage'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'studentTicket.html',
            filename: 'studentTicket.html',
            chunks: ['studentTicket'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'talentRecruitment.html',
            filename: 'talentRecruitment.html',
            chunks: ['help'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'inlandAirTicket.html',
            filename: 'inlandAirTicket.html',
            chunks: ['inlandAirTicket'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'internationalAirTicket.html',
            filename: 'internationalAirTicket.html',
            chunks: ['inlandAirTicket'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'roundTrip.html',
            filename: 'roundTrip.html',
            chunks: ['roundTrip'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'successfully.html',
            filename: 'successfully.html',
            chunks: ['help'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'personalInformation.html',
            filename: 'personalInformation.html',
            chunks: ['personalInformation'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'discount.html',
            filename: 'discount.html',
            chunks: ['help'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'visaInformation.html',
            filename: 'visaInformation.html',
            chunks: ['visaInformation'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'visadetilinfor.html',
            filename: 'visadetilinfor.html',
            chunks: ['help'],
            inject: 'head'
        }),
        new htmlWebpackPlugin({
            template: 'makevisa.html',
            filename: 'makevisa.html',
            chunks: ['makevisa'],
            inject: 'head'
        })
    ]
}