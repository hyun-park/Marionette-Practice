require.config({
  // baseUrl: '.',

  paths: {
    'backbone': '../lib/backbone-min',
    'underscore': '../lib/underscore-min',
    'jquery': '../lib/jquery-3.2.1.min',
    'marionette': '../lib/backbone.marionette.min',
    'backbone.radio': '../lib/backbone.radio',
    "text": '../lib/text'
  },
  // TODO When do I need this?
  // shim : {
  // 	'backbone' : {
  // 		deps : [ 'underscore', 'jquery' ]
  // 	}
  // },


  // urlArgs : 'ts=' + (new Date()).getTime()

});

require([
    'backbone',
    'marionette',
    'underscore',
    // 'text!templates/home.html'
], function (Backbone, Marionette) {

  var IndexView = Marionette.View.extend({
    // el: "#root",
    tagName: "h1",
    template: _.template('Contents')
  });

  var RootView = Marionette.View.extend({
    template: _.template('<div id="body-hook"></div>'),
    regions: {
      main: "#body-hook"
    },

    onRender: function() {
      // To show a view inside a region,
      // simply call showChildView(region, view).
      // This will handle rendering the view's HTML and attaching it to the DOM for you:
      this.showChildView('main', new IndexView());
    }
  });

  var App = Marionette.Application.extend({
    region: '#root',

    onStart: function() {
      this.showView(new RootView());
    }
  });

  var app = new App();
  app.start();



    // var TodoView = Marionette.View.extend({
    //   tagName: "li",
    //   template: todoitemTempl
    // });
    //
    // var TodoList = Marionette.CollectionView.extend({
    //   el: "ul",
    //   childView: TodoView
    // });
    //
    // var AppView = Marionette.View.extend({
    //
    // });
    //
    // var list = new Backbone.Collection([
    //   {assignee: 'Rocket', text: 'Understand Require JS'},
    //   {assignee: 'Jun', text: 'Understand Marionette'}
    // ]);
    //
    // var todo = new TodoList({
    //   collection: list
    // });
    //
    // todo.render();
});
