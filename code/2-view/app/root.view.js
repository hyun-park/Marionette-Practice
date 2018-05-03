define(
    [
        "marionette",
        "backbone",
        "underscore",
        "jQuery",
        "text!root.template.html"
    ], function(
        Marionette,
        Backbone,
        _,
        $,
        rootTemplate,
    ) {
        const RootView = Marionette.View.extend({
            template: rootTemplate,
            tagName: "div",
        });

        return RootView;

    }
);