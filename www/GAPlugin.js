var exec = require('cordova/exec');

module.exports = {
    // initialize google analytics with an account ID and the min number of seconds between posting
    //
    // id = the GA account ID of the form 'UA-00000000-0'
    // period = the minimum interval for transmitting tracking events if any exist in the queue
    init : function(success, fail, id, period) {
        return exec(success, fail, 'GAPlugin', 'initGA', [id, period]);
    },

    // log an event
    //
    // category = The event category. This parameter is required to be non-empty.
    // eventAction = The event action. This parameter is required to be non-empty.
    // eventLabel = The event label. This parameter may be a blank string to indicate no label.
    // eventValue = The event value. This parameter may be -1 to indicate no value.
    trackEvent : function(success, fail, category, eventAction, eventLabel, eventValue) {
        return exec(success, fail, 'GAPlugin', 'trackEvent', [category, eventAction, eventLabel, eventValue]);
    },


    // log a page view
    //
    // pageURL = the URL of the page view
    trackPage : function(success, fail, pageURL) {
        return exec(success, fail, 'GAPlugin', 'trackPage', [pageURL]);
    },

    // Set a custom variable. The variable set is included with
    // the next event only. If there is an existing custom variable at the specified
    // index, it will be overwritten by this one.
    //
    // value = the value of the variable you are logging
    // index = the numerical index of the dimension to which this variable will be assigned (1 - 20)
    //  Standard accounts support up to 20 custom dimensions.
    setVariable : function(success, fail, index, value) {
        return exec(success, fail, 'GAPlugin', 'setVariable', [index, value]);
    },
    
    exit : function(success, fail) {
        return exec(success, fail, 'GAPlugin', 'exitGA', []);
    }

};