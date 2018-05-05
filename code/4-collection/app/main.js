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
