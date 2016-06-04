require.config({
  baseUrl: '/js',
  paths: {
    'jquery': '//code.jquery.com/jquery-2.2.4.min'
  },
  urlArgs: 'version=' + (new Date()).getTime(),
  waithSeconds: 15
});

require(['app'], function(app) {
  app();
});
