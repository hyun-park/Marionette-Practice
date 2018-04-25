require([
    'backbone',
    'marionette',
    'text!templates/todoitem.html'
], function (Backbone, Marionette,todoitemTempl) {
    var TodoView = Marionette.View.extend({
      tagName: "li",
      template: todoitemTempl
    });

    var TodoList = Marionette.CollectionView.extend({
      el: "ul",
      childView: TodoView
    });

    var AppView = Marionette.View.extend({

    });

    var list = new Backbone.Collection([
      {assignee: 'Rocket', text: 'Understand Require JS'},
      {assignee: 'Jun', text: 'Understand Marionette'}
    ]);

    var todo = new TodoList({
      collection: list
    });

    todo.render();
});
