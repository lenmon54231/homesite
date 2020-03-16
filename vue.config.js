// module.exports = {
//     devServer: {
//         proxy: {
//             '/api':{
//                target: 'http://39.97.33.178',
//                changeOrigin: true
//             }
//         }
//     }
// }
module.exports = {
    //axios域代理，解决axios跨域问题
    devServer: {
        proxy: {
            '/v2': {
                target: 'https://douban.uieee.com',
                changeOrigin: true,
                ws: true,
            }
        }
    },
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
     
        // 或者
        // 修改它的选项：
        // config.plugin('prefetch').tap(options => {
        //   options[0].fileBlacklist = options[0].fileBlacklist || []
        //   options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
        //   return options
        // })
      }
}