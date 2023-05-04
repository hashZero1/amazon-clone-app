 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 //this is all auth service in firebase 
 import {
     getAuth,
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged
 } from 'firebase/auth';
 //this allow use to store user data 
 import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
 //firestore is a different service
 // doc get the istance of data
 // getDoc mean you want to access the data 
 //setDoc you need to set the data
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB8Vcqjo7kj32_GzlZl4grGAl3y0og7IDk",
   authDomain: "route-shopping-app.firebaseapp.com",
   projectId: "route-shopping-app",
   storageBucket: "route-shopping-app.appspot.com",
   messagingSenderId: "347302738875",
   appId: "1:347302738875:web:8ac410cb1a30e89c6da29e"
 };
 
 // Initialize Firebase
 //all CRUD functionality happen with this app instance
 const firebaseapp = initializeApp(firebaseConfig);
 
 //provider is instantiate as a class but auth is not
 const provider = new GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});
 
 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
 // export const signInWithGoodleRedirect = () => signInWithRedirect(auth, provider);
 
 //to create the database
 export const db = getFirestore();
 
 // this additionalInformation is a object which by default is empty object
 //in case some value is null (additionalInformation) this will capture and overwrite the value and store it
 export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
   if(!userAuth) return;
 //doc take 3 argument 1 database,2nd collection of data, 3rd some identifier like uuid
 //if it don't have user object google automatically generate for you
   const userDocRef = doc(db, 'users', userAuth.uid);
 // snapshot is kinda like the data also its specific kinf of object
   const userSnapshot = await getDoc(userDocRef);
 
 //if userSnapshot/ user data does not exist...
 //create/set the document with the data from userAuth in my collection or return if exist
   if(!userSnapshot.exists()){
     const {displayName, email} = userAuth;
     const createdAt = new Date();
 
     try{
 //if data does not exist then set the doc with this object {it is like the schema}
       await setDoc(userDocRef, {
         displayName,
         email,
         createdAt,
         ...additionalInformation, 
       });
     }catch(e){
       console.log('error creating the user',e.message)
     }
   }
   return userDocRef;
 }
 
 //to create user with email and password as name suggest
 export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) return;
 
   return await createUserWithEmailAndPassword(auth, email, password);
 }
 
  //to create user with email and password as name suggest
  export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  }
 
 export const signOutUser = async () => await signOut(auth);
 
 //listening to user state and it accept 2 parameters auth and a callback fn
 // call every time when auth state changes || also called observer listener
 export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);