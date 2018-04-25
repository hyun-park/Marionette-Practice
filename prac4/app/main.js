require.config({
    baseUrl: '.',

    paths: {
    'backbone': '../lib/backbone-min',
    'underscore': '../lib/underscore-min',
    'jquery': '../lib/jquery-3.2.1.min',
    'marionette': '../lib/backbone.marionette.min',
    'backbone.radio': '../lib/backbone.radio',
    "text": '../lib/text'
    },
});

require([
    'backbone',
    'marionette',
    'underscore',
    'text!templates/hello.html'
], function (Backbone, Marionette, _, homeTemp) {
    // console.log(homeTemp);

    var IndexView = Marionette.View.extend({
        // el: "#root",
        tagName: "h1",
        // template: _.template('Contents')
        template: homeTemp
    });

    var RootView = Marionette.View.extend({
        el: "#root",
        template: _.template('<div id="body-hook"></div>'),
        regions: {
            main: "#body-hook"
        },

        onRender: function() {
            // To show a view inside a region,
            // simply call showChildView(region, view).
            // This will handle rendering the view's HTML and attaching it to the DOM for you:
            this.showChildView('main', new IndexView());
        }
    });

    var App = Marionette.Application.extend({
        region: '#root',

        onStart: function() {
            this.showView(new RootView());
        }
    });

    var app = new App();
    app.start();
});
