import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAjXB9Gjar72fqf4NcXD6GBxwseD5ueK0U",
    authDomain: "ad-portfolio-88.firebaseapp.com",
    projectId: "ad-portfolio-88",
    storageBucket: "ad-portfolio-88.firebasestorage.app",
    messagingSenderId: "714961281046",
    appId: "1:714961281046:web:652f9c24393094dc94d537",
    measurementId: "G-QPDSFZB60G"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)