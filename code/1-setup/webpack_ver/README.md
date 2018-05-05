
## 설치 및 기본 실행 방법

사용하는 모듈화 툴에 따라 다양한 설치방법이 있다. 이 폴더에서는 `Webpack`을 기반으로 소개하겠다. (`Webpack` 사용법은 여기서 다루지 않음)

***npm 다운로드***

`npm install --save jquery`  
`npm install --save underscore`  
`npm install --save backbone`  
`npm install --save backbone.radio`  
`npm install --save backbone.marionette`


***디렉토리 구조***

```markdown
[Home]
- [app]
    - main.js
    - message.model.js
    - root.template.js
    - root.veiw.js
- index.html
- bundle.js
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
    <div id="app-hook"></div>

    <script src="bundle.js"></script>
</body>
</html>
```

***app/main.js***

```js
import Marionette from 'backbone.marionette';

// View 랜더링을 담당하는 View
const RootView = Marionette.View.extend({
    tagName: "div",
    template: _.template("<h1>Hello World!</div>")
});

const App = Marionette.Application.extend({
    // Application의 Root Entry를 지정
    region: '#app-hook',

    onStart: function() {
        this.showView(new RootView());
    }
});

const app = new App();
app.start();

```
