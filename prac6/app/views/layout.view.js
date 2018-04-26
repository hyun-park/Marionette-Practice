define([
        'backbone',
        'marionette',
        'views/list.view',
        'views/blog.view',
        'text!../templates/blog/layout.template.html'
    ], function(
        Backbone,
        Marionette,
        ListView,
        BlogView,
        layoutTemplate
    ){
        var LayoutView = Marionette.View.extend({
            template: layoutTemplate,

            regions: {
                layout: '.layout-hook'
            },

            onShowBlogList: function() {
                var list = new ListView({collection: this.collection});
                this.showChildView('layout', list);

                /*  Remember - this only sets the fragment, so we can safely call this as
                    often as we like with no negative side-effects.
                */
                Backbone.history.navigate('blog/');
            },

            onShowBlogEntry: function(entry) {
                var model = this.collection.get(entry);
                this.showBlog(model);
            },

            onChildviewSelectEntry: function(child, model) {
                this.showBlog(model);
            },

            /** Child-initiated alias to onShowBlogList */
            onChildviewShowBlogList: function() {
                this.triggerMethod('show:blog:list');
            },

            /** Share some simple logic from our subviews */
            showBlog: function(blogModel) {
                var blog = new BlogView({model: blogModel});
                this.showChildView('layout', blog);

                /*  Remember - this only sets the fragment, so we can safely call this as
                    often as we like with no negative side-effects.
                */
                Backbone.history.navigate('blog/' + blog.id);
            }
        });

        return LayoutView;

    }
);
