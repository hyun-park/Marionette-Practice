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
