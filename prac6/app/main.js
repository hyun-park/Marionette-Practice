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
        'marionette',
        'underscore',
        'app.router',
        './collections/blog.collection',
        './views/layout.view',
    ], function(
        Backbone,
        Marionette,
        _,
        Router,
        BlogCollection,
        LayoutView
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


        var App = Marionette.Application.extend({
            region: '#app-hook',

            onStart: function(options) {

                var layout = new LayoutView({
                    collection: new BlogCollection(options.posts)
                });

                var params = {
                    options: options.getOption('initialData'),
                    layout: layout
                }

                var router = new Router(params);

                this.showView(layout);

                /** Starts the URL handling framework */
                Backbone.history.start();
            }
        });

        var app = new App({initialData: initialData});

        app.start();


    }
);
