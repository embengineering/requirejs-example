({
  appDir: 'full-project/app',
  baseUrl: 'js',
  mainConfigFile: 'full-project/app/js/main.js',
  paths: {
    // override configuration here
    // use 'empty:' to ignore a paths for example,
    // 'jquery': 'empty:'
  },
  dir: 'full-project/public',
  modules: [
    {
      name: 'main'
    }
  ],
  optimizeCss: 'standard',
  removeCombined: true,
  optimize: 'uglify2',
  uglify2: {
    beautify: false
  },
  generateSourceMaps: true,
  preserveLicenseComments: false
})
