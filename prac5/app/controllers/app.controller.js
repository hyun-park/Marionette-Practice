define(
    [
        'marionette'
    ], function(
        Marionette
    ) {
        var Controller = Marionette.Object.extend({
            default() {
                var rootView = this.getOption('todoView');
                rootView.main();
            },

            itemList() {
                console.log("hi");
                var rootView = this.getOption('todoView');
                rootView.showIndex();
                // var rootView = this.getOption('rootView');
                // rootView.showItemList();
            },
            //
            // showItem(item) {
            //     var rootView = this.getOption('rootView');
            //     var itemId = this._cleanItemId(item);
            //     rootView.showItemFromId(item);
            // },
            //
            // _cleanItemId(item) {
            //     // Convert item string from router to the right type
            // }
        });

        return Controller;
});