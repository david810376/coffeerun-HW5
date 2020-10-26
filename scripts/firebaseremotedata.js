
(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;
  
 
  
  class firebaseremotedata{
      constructor(){
        console.log('run the firebase function');
        firebase.initializeApp(window.FireBaseConfig);
        this.fire = firebase.firestore();
        this.getAll()
            .then(d =>{
              console.log('dL ${JSON.stringify(d)}')
            });
      }

      async add(key,val) {return this.fire.collection('coffeeorders').add(val); }
      async get(email, cb){
        const docRef = this.fire.collection('coffeeorders');
        const snapshot = await docRef.where('emailAddress' , '==', email).get();
        return await snapshot.docs.map(e => e.data());
      }
      async get(cb){
        const docRef = this.fire.collection('coffeerders');
        const snapshot = await docRef.get();
        return await snapshot.doc.map(e => e.data());
      }
      async remove(email){
        const docRef = await this.fire.collection('coffeeorders');
        const batch = this.fire.batch();
        const snapshot = await docRef.where('emailAddress', '==', email).get();
        snapshot.forEach(doc => {
          batch.delete(doc.ref);
        });
        await batch.commit();
      }
  }
  
App.firebaseremotedata = firebaseremotedata;
  window.App = App;
})(window);
