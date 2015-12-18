/*global Twstreetvoicemp3, Backbone, JST*/

Twstreetvoicemp3.Views = Twstreetvoicemp3.Views || {};

(function () {
    'use strict';

    Twstreetvoicemp3.Views.UrlView = Backbone.View.extend({

        template: JST['app/scripts/templates/urlView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
