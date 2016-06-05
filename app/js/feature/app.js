define([
  'jquery',
  'module1',
  'module2'
], function(
  $,
  module1,
  module2
) {
  return function() {
    module1();
    module2();
    console.log('App loaded!');

    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;

    $('#mainContent').html('Hello World! Page load time is <strong>' + loadTime + 'ms</strong>');
  };
});
