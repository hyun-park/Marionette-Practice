
## `Collection` 알아보기

`Marionette JS`에서 `Collection`은 복수 개의 `Model`을 한번에 관리할 수 있게 해준다. (`Backbone JS`의 `Collection`을 그대로 사용하고 있다.)
`Collection`도 `Model`과 마찬가지로 `View`와 연결시켜 사용할 수 있을 뿐만 아니라 다음에 배울 `CollectionView`와도 연결시킬 수 잇다.
`Collection`값이 변경되면 연결된 `View`와 `CollectionView`는 자동으로 다시 랜더링이 되어 최신 결과가 반영된다.

> `Collection` 부터는 `require JS` 대신 `Webpack`을 사용하여 진행한다.

***디렉토리 구조***

> 파일이 많아져서 `app` 디렉토리를 나눴다.

```markdown
[Home]
- [app]
    - main.js
    - [models]
        - message.model.js
        - message.collection.js [추가된 부분]
    - [templates]
        - root.template.html
        - message.template.html [추가된 부분]
    - [views]
        - root.view.js
        - message.view.js [추가된 부분]
        - message.collectionView.js [추가된 부분]
- bundle.js
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
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import RootView from './views/root.view'

const App = Marionette.Application.extend({
    region: "#app-hook",

    onStart: function() {
        this.showView(new RootView());
    }
});

const app = new App();
app.start();
```

***app/views/root.view.js***

```js
import Marionette from 'backbone.marionette';
import rootTemplate from '../templates/root.template.html';
import MsgCollectionView from './message.collectionView';
import MsgCollection from '../models/message.collection';
import _ from 'underscore';

// 초기 데이터
const initialData = [
    {
        userName: 'Junghyun',
        contents: 'Hello!',
    },
    {
        userName: 'Jiwon',
        contents: 'I love you.',
    },
]

const RootView = Marionette.View.extend({
    template: _.template(rootTemplate),

    regions: {
        messageContainer: '#messageContainer'
    },

    onRender: function() {
        // rootTemplate의 DOM에서 #messageContainer에 MsgCollectionView를 넣는다.
        // 이때 CollectionView에 MsgCollection을 연결시켜준다. (초기 데이터도 주입)
        this.showChildView('messageContainer', new MsgCollectionView({
            collection: new MsgCollection(initialData),
        }));
    }
});

export default RootView;
```

***app/templates/root.template.html***

```html
<h1>Messages</h1>
<div class="messages">

    <!-- 메세지들이 들어갈 부분 -->
    <div id="messageContainer">
    </div>
</div>
```

***app/views/message.collectionView.js***
```js
import Marionette from 'backbone.marionette';
import MsgView from './message.view'
import _ from 'underscore';

const MsgCollectionView = Marionette.CollectionView.extend({
    // CollectionView 는 따로 템플릿을 가지지 않는다.
    // Child View를 Collection의 개수 만큼 반복 시킬 뿐이기 때문이다.
    childView: MsgView,
});

export default MsgCollectionView;
```

***app/views/message.view.js***
```js
import Marionette from 'backbone.marionette';
import msgTemplate from '../templates/message.template.html';
import _ from 'underscore';

const MsgView = Marionette.View.extend({
    template: _.template(msgTemplate),
    templateContext: function() {
        return {
            userName: this.model.get('userName'),
            contents: this.model.get('contents'),
        }
    },
});

export default MsgView;
```

***app/templates/message.template.html***
```html
<h3>Message From <%- userName %></h3>
<p>
    <%- contents %>
</p>
```

***app/models/message.collection.js***
```js
import Backbone from 'backbone';
import MsgModel from './message.model';

const MsgCollection = Backbone.Collection.extend({
    model: MsgModel,
});

export default MsgCollection;
```

***app/models/message.model.js***
```js
import Backbone from 'backbone';

const MsgModel = Backbone.Model.extend({
    // Model의 default 값을 설정한다.
    defaults: {
        userName: '',
        contents: ''
    },
});

export default MsgModel;
```
