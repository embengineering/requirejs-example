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

    $('#mainContent').html('Hello World!');
  };
});
