define([
        'marionette',
        '../collections/comment.collection',
        'text!../templates/blog/comment.template.html',
        'text!../templates/blog/blog.template.html'
    ], function(
        Marionette,
        CommentCollection,
        commentTemplate,
        blogTemplate
    ){

        var Comment = Marionette.View.extend({
          tagName: 'li',
          template: commentTemplate
        });

        var CommentListView = Marionette.CollectionView.extend({
          tagName: 'ol',
          childView: Comment
        });

        var Blog = Marionette.View.extend({
          template: blogTemplate,

          regions: {
              comments: '.comment-hook'
          },

          ui: {
              back: '.back'
          },

          triggers: {
              'click @ui.back': 'show:blog:list'
          },

          onShow: function() {
            var comments = new CommentCollection(this.model.get('comments'));
            var commentView = new CommentListView({collection: comments});

            this.showChildView('comments', commentView);
          }
        });

        return Blog;

    }
);
