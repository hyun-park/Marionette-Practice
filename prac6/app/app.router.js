define([

        'marionette',
        './views/layout.view',
        './collections/blog.collection'

    ], function(
        Marionette,
        LayoutView,
        BlogList

    ){
        var Controller = Marionette.Object.extend({
            initialize: function(options) {
                /** We want easy access to our root view later */
                this.options.layout = options.layout;
            },

            /** List all blog entrys with a summary */
            blogList: function() {
                console.log("hi");
                var layout = this.getOption('layout');
                layout.triggerMethod('show:blog:list');
            },

            /** List a named entry with its comments underneath */
            blogEntry: function(entry) {
                var layout = this.getOption('layout');
                layout.triggerMethod('show:blog:entry', entry);
            }
        })

        var Router = Marionette.AppRouter.extend({
            appRoutes: {
                'blog/': 'blogList',
                'blog/:entry': 'blogEntry'
            },

            /** Initialize our controller with the options passed into the application,
              such as the initial posts list.
            */
            initialize: function(options) {
                console.log(options.options);

                this.controller = new Controller({
                    initialData: options.options,
                    layout: options.layout
                });
            }
        });

        return Router;
    }
);
