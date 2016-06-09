require.config({
  baseUrl: '/js',
  paths: {
    'jquery': 'vendor/jquery-2.2.4.min',
    'one': 'feature/one',
    'two': 'feature/two',
    'three': 'feature/three',
    'app': 'feature/app'
  }
});

require(['app'], function(app) {
  app();
});
