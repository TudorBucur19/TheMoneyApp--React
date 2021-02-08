import firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBC_6tgpyCtPsC7e_nSyW_IpuFudGH7UTQ",
  authDomain: "themoneyapp-882a5.firebaseapp.com",
  projectId: "themoneyapp-882a5",
  storageBucket: "themoneyapp-882a5.appspot.com",
  messagingSenderId: "957635928397",
  appId: "1:957635928397:web:abedf188d3bd5f3cdd9704"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;