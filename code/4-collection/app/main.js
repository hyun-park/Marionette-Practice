import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import RootView from './root.view'
import MsgModel from './message.model'

const App = Marionette.Application.extend({
    region: "#app-hook",

    onStart: function() {
        this.showView(new RootView({
            model: new MsgModel({
                userName: `Rocket`,
                contents: `Good Morning, Sir!`,
            }),
        }));
    }
});

const app = new App();
app.start();
