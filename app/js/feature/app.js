define([
  'module',
  'jquery',
  'module1',
  'module2'
], function(
  module,
  $,
  module1,
  module2
) {
  return function() {
    module1();
    module2();
    console.log('App loaded!');

    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;

    $('#mainContent').html(`
      <h1>Hello World!</h1>
      <br />
      <h2>Page load time is ${loadTime}ms</h2>
      <br />
      <h2>Your current locale is ${module.config().locale}</h2>
      `);
  };
});
