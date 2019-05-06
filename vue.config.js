module.exports = {
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