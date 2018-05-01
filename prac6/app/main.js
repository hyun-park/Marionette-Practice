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

        var initialData = {
          posts: [
            {
              author: 'Scott',
              title: 'Why Marionette is amazing',
              content: '...',
              id: 42,
              comments: [
                {
                  author: 'Steve',
                  content: '...',
                  id: 56
                }
              ]
            },
            {
              author: 'Andrew',
              title: 'How to use Routers',
              content: '...',
              id: 17
            }
          ]
        };


        var App = new Marionette.Application({
          onStart: function(options) {
            var router = new Router(options);

            /** Starts the URL handling framework */
            Backbone.history.start();
          }
        });

        App.start({initialData: initialData});

    }
);
