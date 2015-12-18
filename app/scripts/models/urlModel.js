/*global Twstreetvoicemp3, Backbone*/

Twstreetvoicemp3.Models = Twstreetvoicemp3.Models || {};

(function () {
    'use strict';

    Twstreetvoicemp3.Models.UrlModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
