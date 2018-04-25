define(
    [
        'backbone',
        'marionette',
        'text!templates/todoitem.html',
        'text!templates/appview.html',
        'text!templates/form.html',
    ],function(
        Backbone,
        Marionette,
        todoItemTmpl,
        appTmpl,
        formTmpl
    ) {

        var TodoView = Marionette.View.extend({
            tagName: 'li',
            template: todoItemTmpl
        });

        var TodoListView = Marionette.CollectionView.extend({
            tagName: 'ul',
            childView: TodoView
        });

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

            onAddTodoItem: function() {
                this.model.set({
                    assignee: this.ui.assignee.val(),
                    text: this.ui.text.val()
                });

                if (this.model.isValid()) {
                    var items = this.model.pick('assignee', 'text');
                    this.collection.add(items);
                }
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
            },

            collectionEvents: {
                add: 'itemAdded'
            },

            itemAdded: function() {
                this.model.set({
                    assignee: '',
                    text: ''
                });

                this.ui.error.text('');
                this.ui.text.focus();
            }


        });


        var LayoutView = Marionette.View.extend({
            el: '#app-hook',
            template: appTmpl,

            regions: {
                itemList: '#item-list-container',
                form: "#form-container"
            },

            onRender: function() {
                var todo = new TodoListView({
                    collection: this.collection
                });

                this.showChildView('itemList', todo);
                this.showChildView('form', new FormView({
                    model: this.model,
                    collection: this.collection
                }));
            },
        });

        return LayoutView;


    }
);