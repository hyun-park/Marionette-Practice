define(
    [
        "marionette",
        "backbone",
        "underscore",
        "jQuery",
        "text!/app/root.template.html",
    ], function(
        Marionette,
        Backbone,
        _,
        $,
        rootTemplate,
    ) {
        const RootView = Marionette.View.extend({
            template: rootTemplate,
            templateContext: function() {
                return {
                    userName: this.model.get('userName'),
                    contents: this.model.get('contents'),
                }
            },
            tagName: "div",
        });

        return RootView;

    }
);
