define(
    [
        "marionette",
        "backbone",
        "underscore",
        "jQuery",
    ], function(
        Marionette,
        Backbone,
        _,
        $,
    ) {
        const MsgModel = Backbone.Model.extend({
            // Model의 default 값을 설정한다.
            defaults: {
                userName: '',
                contents: ''
            },
        });

        return MsgModel;

    }
);
