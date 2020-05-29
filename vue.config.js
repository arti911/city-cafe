module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/city-cafe/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/styles/variables.sass"'
      },
      scss: {
        prependData: '@import "./src/styles/variables.scss";'
      }
    }
  }
}
