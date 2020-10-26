(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;
    
    firebase.initializeApp(config);
    var fire = firebase.firestore();
    
    class firebaseremotedata{
    
    
    }
    
    
    
    
  App.firebaseremotedata = firebaseremotedata;
    window.App = App;
  })(window);
