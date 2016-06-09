({
  baseUrl: 'single-file/app/js',
  mainConfigFile: 'single-file/app/js/main.js',
  paths: {
    // override configuration here
    // use 'empty:' to ignore a paths for example,
    // 'jquery': 'empty:'
  },
  name: 'main',
  out: 'single-file/public/js/main.bundle.js',
  optimize: 'uglify2',
  uglify2: {
    beautify: false
  }
})
