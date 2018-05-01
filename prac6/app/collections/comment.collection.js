define([
        'backbone',
        '../models/comment.model'
    ], function(
        Backbone,
        CommentModel
    ){
        var CommentCollection = Backbone.Collection.extend({
            smodel: CommentModel
        });

        return CommentCollection;

    }
);
