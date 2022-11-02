const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: 'arm',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/arm/'
    : '/'
})
