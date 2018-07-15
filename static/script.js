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
db = firebase.database(app);
databaseRef = db.ref();

function signup(email,password,first_name,last_name,age){
    if (auth.currentUser!=null){
        auth.signOut();
    }		
    auth.createUserWithEmailAndPassword(email,password);
    console.log(auth.currentUser.uid);
    console.log(auth.currentUser.email);
}

function signin(email,password){
    auth.signInWithEmailAndPassword(email,password);
    if (auth.currentUser!=null){
        console.log(auth.currentUser.uid);
        console.log(auth.currentUser.email);
    }
}

function studentInfo(first_name,last_name,age){
    var student = {
        first_name: first_name,
        last_name: last_name,
        age: age,
        hours: 0,
        lessons: 0,
        money_paid: 0,
        total_money: 0
    };
    databaseRef.child("students").child(auth.currentUser.uid).set(student);
}

function teacherInfo(_fname,_lname,_cost){
    var teacher = {
        _fname: _fname,
        _lname: _lname,
        _cost: _cost,
        _numOfRates: 0,
        rating: -1
    };
    databaseRef.child("teachers").child(auth.currentUser.uid).set(teacher);
}
