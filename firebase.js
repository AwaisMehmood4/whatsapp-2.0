import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDF2Gb1E5YYeE35ZD_KW3WVsRGpEaM2QGA",
	authDomain: "whatsapp-381e4.firebaseapp.com",
	projectId: "whatsapp-381e4",
	storageBucket: "whatsapp-381e4.appspot.com",
	messagingSenderId: "609386256087",
	appId: "1:609386256087:web:e936334210e40c7256c292"
};


const app = firebase.apps.length
	? firebase.app()
	: firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();

export const authProvider = new firebase.auth.GoogleAuthProvider();
