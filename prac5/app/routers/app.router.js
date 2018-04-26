define(
    [
        'marionette',
        './controllers/app.controller'
    ], function(
        Marionette,
        AppController
    ) {
        var Router = Marionette.AppRouter.extend({
            initialize(options) {
                this.controller = new AppController(options);
            },
            appRoutes: {
                // '': 'default',
                'items/': 'itemList',
                // 'items/:item': 'showItem'
            }
        });

        return Router;
});
