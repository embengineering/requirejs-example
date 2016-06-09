define([
  'module',
  'jquery',
  'one',
  'two',
  'three'
], function(
  module,
  $,
  one,
  two,
  three
) {
  return function() {
    one();
    two();
    three();
    console.log('App loaded!');

    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;

    $('#mainContent').html(`
      <h1>Single JS File (Example)</h1>
      <br />
      <h2>Page load time is ${loadTime}ms</h2>
      <br />
      <h2>Your current locale is ${module.config().locale}</h2>
      `);
  };
});
