import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2uxyOC2M71wKE1Xr54rxN3uKUhFVqh0s",
  authDomain: "codecraftersfirebase.firebaseapp.com",
  projectId: "codecraftersfirebase",
  storageBucket: "codecraftersfirebase.appspot.com",
  messagingSenderId: "146385532544",
  appId: "1:146385532544:web:dde57e527836919165d865",
  measurementId: "G-D3MP039T5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
//export const imagesRef = ref(storage, 'CodeCraftersImages');
//export const thumbnail = ref(storage, 'CodeCraftersImages/Codestone1.png')

export const getImageUrl = async () => {
  const storage = getStorage();
  const imageRef = ref(storage, 'CodeCraftersImages/Codestone1.png');
  const downloadURL = await getDownloadURL(imageRef);
  return downloadURL;
};

export const db = getFirestore(app);