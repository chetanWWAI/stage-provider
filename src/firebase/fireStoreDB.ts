import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyA-cUzFFTjxJRBV5UajtahXkpi41AvUTbE",
    // authDomain: "expo-b8e9a.firebaseapp.com",
    // projectId: "expo-b8e9a",
    // storageBucket: "expo-b8e9a.appspot.com",
    // messagingSenderId: "311646104597",
    // appId: "1:311646104597:web:af8aad4cd0b023d36fb21c"

    apiKey: "AIzaSyDNRUqKiQ8--C13TkSsqz1O_gzFIPwxzHw",
    authDomain: "wordworksai-website.firebaseapp.com",
    projectId: "wordworksai-website",
    storageBucket: "wordworksai-website.firebasestorage.app",
    messagingSenderId: "565398367143",
    appId: "1:565398367143:web:763a1701c4719fd3d6a482",
    measurementId: "G-XCL93LYNZP"
};

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

// Read a document from Firestore with a generic type
export const getDocument = async <T>(collectionName: string, id: string): Promise<T | null> => {
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        return docSnap.data() as T;
        } else {
        console.log("No such document!");
        return null;
        }
    } catch (error) {
        console.error("Error reading document: ", error);
        return null;
    }
}
