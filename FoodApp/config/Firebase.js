import firebase from 'firebase'
import 'firebase/firestore'
import {
    APIKEY,
    AUTHDOMAIN,
    DATABASEURL,
    PROJECTID,
    MESSAGESENDERID,
    APPID
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    databaseURL: DATABASEURL,
    projectId: PROJECTID,
    storageBucket: '',
    messagingSenderId: MESSAGESENDERID,
    appId: APPID
}
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export default Firebase;