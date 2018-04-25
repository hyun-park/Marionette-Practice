define(
    [
        'marionette',
        'text!templates/form.html',
    ], function(Marionette, formTmpl) {

        var FormView = Marionette.View.extend({
            template: formTmpl,
            model: this.model,
            collection: this.collection,

            // DOM jQuery references
            ui: {
                assignee: '#id_assignee',
                form: 'form',
                text: '#id_text',
                error: "#error-msg"
            },

            triggers: {
                'submit @ui.form': 'add:todo:item'
            },

            modelEvents: {
                'invalid': 'showErrorMsg',
                'change': 'render'
            },

            showErrorMsg: function(msg) {
                if(msg.validationError.assignee) {
                    var err = msg.validationError.assignee
                } else {
                    var err = msg.validationError.text
                }
                this.ui.error.text(err);
            }


        });

        return FormView;

    }
);