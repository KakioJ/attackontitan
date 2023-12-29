const { defineConfig } = require('@vue/cli-service')
// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})

// 使用等比适配插件
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/attackontitan/'
    : '/'
}


module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js', // 入口文件
      title: '进击的巨人登录页'
    }
  }
  
})
