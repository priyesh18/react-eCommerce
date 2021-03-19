import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAdiwJMmr8FmEfljPU87w3thgPVK5Lnfik',
  authDomain: 'react-ecom-db-ae98b.firebaseapp.com',
  databaseURL: 'https://react-ecom-db-ae98b.firebaseio.com',
  projectId: 'react-ecom-db-ae98b',
  storageBucket: 'react-ecom-db-ae98b.appspot.com',
  messagingSenderId: '722032180875',
  appId: '1:722032180875:web:1404451e8ab9b9eba01e8e',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
