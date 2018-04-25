define(
    [
        'marionette',
        'text!templates/todoitem.html'
    ], function(Marionette, todoItemTmpl) {


        var TodoView = Marionette.View.extend({
            tagName: 'li',
            template: todoItemTmpl
        });

        var TodoListView = Marionette.CollectionView.extend({
            tagName: 'ul',
            childView: TodoView
        });

        return TodoListView;

    }
);