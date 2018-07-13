var config = {
    apiKey: "AIzaSyCMcif23MajRqImpvSj34QcE7Br47Q_Sbw",
    authDomain: "easylicense-e9174.firebaseapp.com",
    databaseURL: "https://easylicense-e9174.firebaseio.com",
    projectId: "easylicense-e9174",
    storageBucket: "easylicense-e9174.appspot.com",
    messagingSenderId: "467829835580"};

app = firebase.initializeApp(config);
console.log(app.options.credential === config.credential);  // true
console.log(app.options.databaseURL === config.databaseURL);  // true

auth = firebase.auth(app);
auth.createUserWithEmailAndPassword('first@website.com','saedsaed');
