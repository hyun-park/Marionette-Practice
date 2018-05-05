import Marionette from 'backbone.marionette';
import rootTemplate from '../templates/root.template.html';
import MsgCollectionView from './message.collectionView';
import MsgCollection from '../models/message.collection';
import _ from 'underscore';

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
        this.showChildView('messageContainer', new MsgCollectionView({
            collection: new MsgCollection(initialData),
        }));
    }
});

export default RootView;
