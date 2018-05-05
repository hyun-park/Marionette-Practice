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
