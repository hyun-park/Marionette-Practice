define([
        'marionette',
        'text!../templates/blog/item.template.html'
    ], function(
        Marionette,
        itemTemplate
    ){
        var Entry = Marionette.View.extend({
            template: itemTemplate,
            tagName: 'li',

            triggers: {
                click: 'select:entry'
            }
        });


        var BlogList = Marionette.CollectionView.extend({
            childView: Entry,
            tagName: 'ul',

            onChildviewSelectEntry: function(child, options) {
                this.triggerMethod('select:entry', child.model);
            }
        });

        return BlogList;

    }
);
