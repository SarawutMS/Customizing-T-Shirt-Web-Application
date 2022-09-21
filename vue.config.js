const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: 'me',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/me/'
    : '/'
})
