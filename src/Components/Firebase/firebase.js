import app from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {
  apiKey: 'AIzaSyC4yDB0rPIHVQt9nsgAZrSSdr09lHCcQyM',
  authDomain: 'new-task-project-60574.firebaseapp.com',
  databaseURL: 'https://new-task-project-60574.firebaseio.com',
  projectId: 'new-task-project-60574',
  storageBucket: '',
  messagingSenderId: '466812015839',
  appId: '1:466812015839:web:1c6b6929fde4f000',
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
