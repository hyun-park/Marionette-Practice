
## 설치 및 기본 실행 방법

사용하는 모듈화 툴에 따라 다양한 설치방법이 있다. 이 폴더에서는 `Webpack`을 기반으로 소개하겠다.

***디렉토리 구조***

```markdown
[Home]
- [app]
    - main.js
- [lib]
    - require.js (JS 모듈화 용 라이브러리) 
    - text.js (Require JS의 추가 플러그인 / html 모듈화용)
    - jquery-3.2.1.min.js (Backbone JS의 의존 라이브러리)
    - underscore-min.js (Backbone JS의 의존 라이브러리)
    - backbone-min.js (Marionette JS의 의존 라이브러리)
    - backbone.radio.js (Marionette JS의 추가 플러그인 / 이벤트 관리용)
    - backbone.marionette.min.js (Marionette JS)
- index.html
```


***index.html***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

    <!-- 이 부분에 모든 것들을 렌더합니다. -->
    <div id="app-hook"></div>
    
    <!-- Require JS를 가져와 줍니다. -->
    <!-- require.js가 로딩되면 main.js 파일을 실행합니다. -->
    <script data-main="app/main.js" src="lib/require.js"></script>
</body>
</html>
```

***app/main.js***

```js
require.config({
    baseUrl: ".",
    paths: {
        // 각종 라이브러리를 불러와 줍니다.
        'jQuery': '../lib/jquery-3.2.1.min',
        'underscore': '../lib/underscore-min',
        'backbone': '../lib/backbone-min',
        'backbone.radio': '../lib/backbone.radio',
        'marionette': '../lib/backbone.marionette.min',
    },
    shim: {
        // Backbone JS Dependency
        'backbone': {
            deps: ['underscore', 'jQuery'],
        },
    },

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
            template: _.template("<h1>Hello World!</div>");
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
```
