Appery.InAppBrowser = Appery.createClass(null, {
    init : function(requestOptions) {
        this.__requestOptions = $.extend({}, requestOptions);
    },
    process : function(settings) {
        settings.beforeSend(settings);
        if (this.__requestOptions.echo) {
            settings.success(this.__requestOptions.echo);
        } else {
            window.open(settings.data.link, settings.data.browser_type);
            settings.success({});
        }
        settings.complete('success');
    }
});