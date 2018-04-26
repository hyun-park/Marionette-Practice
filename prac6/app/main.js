require
    .config({
        paths: {
            'backbone': '../lib/backbone-min',
            'backbone.radio': '../lib/backbone.radio',
            'underscore': '../lib/underscore-min',
            'jquery': '../lib/jquery-3.2.1.min',
            'marionette': '../lib/backbone.marionette.min',
            "text": '../lib/text'
        }
    }
);

require(
    [
        'backbone',
        'marionette'
    ], function(
        Backbone,
        Marionette
    ) {
        var todo = Backbone.Model.extend({

        });
        var todoView = new TodoView({

        });
        var App = Marionette.Application.extend({
            region: '#app-hook',
            onStart: function() {

            }
        });


    }
);
