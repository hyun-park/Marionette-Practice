import Marionette from 'backbone.marionette';
import rootTemplate from './root.template.html';

const RootView = Marionette.View.extend({
    template: rootTemplate,
    templateContext: function() {
        return {
            userName: this.model.get('userName'),
            contents: this.model.get('contents'),
        }
    },
    tagName: "div",
});

export default RootView;
