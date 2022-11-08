const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  // replace with the name of your github repository - just the name, not the https://github.com/you/ part
    ? '/would_you_rather/'
    : '/',
    outputDir: "docs"
}


// error message on the website