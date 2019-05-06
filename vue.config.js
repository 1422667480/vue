const path = require('path');
module.exports = {
    /* 别名配置 */
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@views', resolve('src/views'))
            .set('@router', resolve('src/router'))
            .set('@', resolve('src'))
    },
    publicPath: './',
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'src/pages/index/main.js',
            template: "src/pages/index/index.html",
            filename: "index.html",
        },
        home: {
            entry: 'src/pages/home/main.js',
            template: "src/pages/home/home.html",
            filename: "home.html",
        }
    },
    devServer: {
        open: true,
        port: 8088,
        https: false,
    },
}
/**
 * @description 配置绝对路径
 * @param {*} dir
 */
function resolve (dir) {
    return path.join(__dirname, dir);
}