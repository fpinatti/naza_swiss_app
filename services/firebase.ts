import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore';

// REPLACE WITH YOUR ACTUAL FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Helper functions to fetch data
export const fetchEvents = async () => {
  try {
    const eventsRef = collection(db, 'events');
    const q = query(eventsRef, orderBy('date', 'asc')); // Assuming date is sortable
    const snapshot = await getDocs(q);
    // Fixed: Cast doc.data() to any to avoid "Spread types may only be created from object types" error
    return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const fetchMinistries = async () => {
  try {
    const ministriesRef = collection(db, 'ministries');
    const snapshot = await getDocs(ministriesRef);
    // Fixed: Cast doc.data() to any to avoid "Spread types may only be created from object types" error
    return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) }));
  } catch (error) {
    console.error("Error fetching ministries:", error);
    return [];
  }
};