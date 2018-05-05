import Backbone from 'backbone';

const MsgModel = Backbone.Model.extend({
    // Model의 default 값을 설정한다.
    defaults: {
        userName: '',
        contents: ''
    },
});

export default MsgModel;
