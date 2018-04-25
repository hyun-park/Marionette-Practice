define(
    [
        'backbone',
        'marionette',
        'views/list',
        'views/form',
        'text!templates/layout.html',
    ],function(
        Backbone,
        Marionette,
        TodoListView,
        FormView,
        appTmpl,
    ) {

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

                var form = new FormView({
                    model: this.model,
                    collection: this.collection
                })

                this.showChildView('itemList', todo);
                this.showChildView('form', form);
            },

            collectionEvents: {
                add: 'itemAdded'
            },

            onChildviewAddTodoItem: function(child) {
                this.model.set({
                    assignee: child.ui.assignee.val(),
                    text: child.ui.text.val()
                });

                if (this.model.isValid()) {
                    var items = this.model.pick('assignee', 'text');
                    this.collection.add(items);
                }
            },

            itemAdded: function() {
                this.model.set({
                    assignee: '',
                    text: ''
                });

                var form = this.getChildView('form');
                form.ui.text.focus();
            }
        });

        return LayoutView;


    }
);