define([
        'backbone',
        '../models/blog.model'
    ], function(
        Backbone,
        BlogModel
    ){
        var BlogCollection = Backbone.Collection.extend({
            model: BlogModel
        });

        return BlogCollection;

    }
);
