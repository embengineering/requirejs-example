({
  baseUrl: 'app/js',
  mainConfigFile: 'app/js/main.js',
  paths: {
    // override configuration here
    // use 'empty:' to ignore a paths for example,
    // 'jquery': 'empty:'
  },
  name: 'main',
  out: 'app/js/main.bundle.js',
  optimize: 'uglify2'
})
