# Marionette Fundamental

Last Updated by 04.25.18

## Overview

`Backbone JS`를 기반으로 하고 있는 `Marionette JS 3`에 대한 정리 

## Marionette JS 란?

(업데이트 예정)

## 설치 방법

사용하는 모듈화 툴에 따라 다양한 설치방법이 있습니다. 이 리포에서는 `Require JS`를 기반으로 소개하도록 하겠습니다.  

***디렉토리 구조***

```markdown
[Home]
- [app]
    - [collections]
    - [models]
    - [routers]
    - [templates]
    - [views]
    - main.js
- [lib]
    - require.js
    - jquery-3.2.1.min.js
    - underscore-min.js
    - backbone-min.js
    - backbone.radio.js
    - backbone.marionette.min.js
    - text.js
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
// 설정 부분
require.config({
    paths: {
        'jQuery': '~',
        'underscore': '~',
        'backbone': '~',
        'marionette': '~'
        // ~~
    }
});

require(
    [
        'marionette',
        'backbone',
        'todoModel',
        'todoView'
    ], function(
        Marionette,
        Backbone,
        TodoModel,
        TodoView
    ) {
        
    }
)
```
