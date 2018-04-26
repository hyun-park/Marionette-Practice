define([
        'backbone'
    ], function(
        Backbone
    ){
        var Blog = Backbone.Model.extend({
            defaults: function() {
                return {
                    comments: []
                }
            }
        });

        return Blog;
    }
);
