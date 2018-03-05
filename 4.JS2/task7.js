(function() {
  var config = {
    apiKey: "AIzaSyD2H4S22-kNVQQKtc30pnkvLCKAkLYpjOg",
    authDomain: "js2-task7-firebase.firebaseapp.com",
    databaseURL: "https://js2-task7-firebase.firebaseio.com",
    projectId: "js2-task7-firebase",
    storageBucket: "",
    messagingSenderId: "180060720351"
    };
  firebase.initializeApp(config);

  const main = document.getElementById('main');
  let db = firebase.database().ref().child('education').limitToFirst(7);
  db.on('value', snap1 => console.log(snap1.val()));

  db.on("value", snapshot => {
    snapshot.forEach(function (childSnapshot) {
      const childData = childSnapshot.val();

      const wrapper = document.createElement('article');

      const year = document.createElement('p');
      year.classList.add('year');
      year.innerHTML = childData.date;
      wrapper.appendChild(year);

      const title = document.createElement('p');
      title.classList.add('title');
      title.innerHTML = childData.title;
      wrapper.appendChild(title);

      const text = document.createElement('p');
      text.classList.add('text');
      text.innerHTML = childData.someText;
      wrapper.appendChild(text);

      main.appendChild(wrapper);
    });
    });

    $(window).one('scroll', function() { 
      let db = firebase.database().ref().child('education').orderByKey().startAt('7');
      db.on('value', snap1 => console.log(snap1.val()));

      db.on("value", snapshot => {
        snapshot.forEach(function (childSnapshot) {
          const childData = childSnapshot.val();

          const wrapper = document.createElement('article');

          const year = document.createElement('p');
          year.classList.add('year');
          year.innerHTML = childData.date;
          wrapper.appendChild(year);

          const title = document.createElement('p');
          title.classList.add('title');
          title.innerHTML = childData.title;
          wrapper.appendChild(title);

          const text = document.createElement('p');
          text.classList.add('text');
          text.innerHTML = childData.someText;
          wrapper.appendChild(text);

          main.appendChild(wrapper);
          });
      });      
  });
})();

