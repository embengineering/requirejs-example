require.config({
  baseUrl: '/js',
  paths: {
    'jquery': 'vendor/jquery-2.2.4.min',
    'module1': 'feature/module1',
    'module2': 'feature/module2',
    'app': 'feature/app'
  }
});

require(['app'], function(app) {
  app();
});
