import Marionette from 'backbone.marionette';
import MsgView from './message.view'
import _ from 'underscore';

const MsgCollectionView = Marionette.CollectionView.extend({
    childView: MsgView,
});

export default MsgCollectionView;
