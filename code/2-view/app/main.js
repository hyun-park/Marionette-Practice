
// 설정 부분
require.config({
    baseUrl: ".",
    paths: {
        // 각종 라이브러리를 불러와 줍니다.
        "jQuery": "/lib/jquery-3.2.1.min",
        "underscore": "/lib/underscore-min",
        "backbone": "/lib/backbone-min",
        "backbone.radio": "/lib/backbone.radio",
        "marionette": "/lib/backbone.marionette.min",
    }
});


// 실제 어플리케이션이 로직이 시작하는 부분
require(
    [

        "marionette",
        "backbone",
        "underscore",
        "jQuery",

        // View를 가져온다.
        "/app/root.view.js",

    ], function(

        Marionette,
        Backbone,
        _,
        $,
        RootView,

    ) {


        var App = Marionette.Application.extend({
            // Application의 Root Entry를 지정
            region: "#app-hook",

            onStart: function() {
                //가져온 뷰를 인스턴스화
                this.showView(new RootView());
            }
        });

        var app = new App();
        app.start();
    }
)
