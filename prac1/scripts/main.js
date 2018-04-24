/**
 * RequireJS configuration
 */
require
		.config({
			baseUrl : '.', /* relative to Marionette-Practice context path */
			paths : {
				/*
				 * Third-party libraries
				 */

				/*
				 * https://jquery.com/
				 */

				'jquery' : './node_modules/jquery/dist/jquery.min',

				/*
				 * http://backbonejs.org/ http://marionettejs.com/
				 * https://github.com/marionettejs/backbone.radio
				 */
				'underscore' : './node_modules/underscore/underscore-min',
				'backbone' : './node_modules/backbone/backbone-min',
				'backbone.marionette' : './scripts/backbone.marionette.min',
				'backbone.radio' : './node_modules/backbone.radio/src/backbone.radio',
				'hello' : './app/hello',

				/*
				 * http://underscorejs.org/
				 */
			}
		});

requirejs([
    'jquery',
    'backbone',
    'backbone.marionette',
    'underscore',
    'hello'
  ],

  // function($, Backbone, Marionette, _) {
  function($, Backbone, Marionette, _, hello) {
    console.log($);
    console.log(Backbone);
    console.log(Marionette);
    console.log(_);

  }
);

// EOF
