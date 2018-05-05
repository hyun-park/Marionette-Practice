import Backbone from 'backbone';
import MsgModel from './message.model';

const MsgCollection = Backbone.Collection.extend({
    model: MsgModel,
});

export default MsgCollection;
