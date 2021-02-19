const path = require("path");
const resolve = function(dir) {
  // @ts-ignore
  return path.join(__dirname, dir)
};
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  assetsDir: "static",

  // 是否开启eslint保存检测
  lintOnSave: false,

  // 是否在构建生产包时生成sourcdeMap
  productionSourceMap: false,

  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@v", resolve("src/views"))
      .set("@c", resolve("src/components"))
      .set("@u", resolve("src/utils"))
      .set("@s", resolve("src/service")); /* 别名配置 */
    config.optimization.runtimeChunk("single");
  },

  devServer: {
    // host: "localhost",
    /* 本地ip地址 */
    //host: "192.168.1.107",
    host: "0.0.0.0", //局域网和本地访问
    port: "8080",
    //public: '192.168.7.30:8080',
    hot: true,
    /* 自动打开浏览器 */
    open: false,
    overlay: {
      warning: false,
      error: true
    },
    /* 跨域代理 */
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        target: "http://m260048y71.zicp.vip", //
        // target: "http://192.168.1.102:8888", //
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    },
    patterns: [
      // scss文件路径
      //path.resolve(__dirname, "./src/assets/scss/entrance.scss")
    ]
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/entrance.scss";`
      },
    }
  }

}
