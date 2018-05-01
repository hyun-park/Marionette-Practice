
// 설정 부분
require.config({
    paths: {
        // 각종 라이브러리를 불러와 줍니다.
        'jQuery': '../lib/jquery-3.2.1.min',
        'underscore': '../lib/underscore-min',
        'backbone': '../lib/backbone-min',
        'backbone.radio': '../lib/backbone.radio',
        'marionette': '../lib/backbone.marionette.min',
    }
});


// 실제 어플리케이션이 로직이 시작하는 부분
require(
    [

        'marionette',
        'backbone',
        'underscore',
        'jQuery'

    ], function(

        Marionette,
        Backbone,
        _,
        $

    ) {

        // View 랜더링을 담당하는 View
        var RootView = Marionette.View.extend({
            tagName: "div",
            template: _.template("<h1>Hello World!</div>")
        });

        var App = Marionette.Application.extend({
            region: '#app-hook',

            onStart: function() {
                this.showView(new RootView());
            }
        });

        var app = new App();
        app.start();
    }
)
