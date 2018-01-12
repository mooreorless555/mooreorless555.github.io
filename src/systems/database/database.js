import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyANmdr_oNcjak8eVKUI7esAoyk4mtWKD-M",
    authDomain: "moves-ad1b4.firebaseapp.com",
    databaseURL: "https://moves-ad1b4.firebaseio.com",
    projectId: "moves-ad1b4",
    storageBucket: "moves-ad1b4.appspot.com",
    messagingSenderId: "583373480587"
};

class Database_C {

    constructor() {
        console.log("Database class imported.");
        firebase.initializeApp(firebaseConfig);
    }

    ref(path) {
        return firebase.database().ref(path);
    }

    database() {
        return firebase.database();
    }

    async get(path) {
        var data = await firebase.database().ref(path).once('value');
        return data.val();
    }

    async insert(path, object) {
        return await firebase.database().ref(path).update(object);
    }

    async remove(path) {
        return await firebase.database().ref(path).remove();
    }

}

export const Database = new Database_C();