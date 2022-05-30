import { useState, useEffect } from 'react';
import firebase from 'firebase';

export const useDatabaseCalls = (collectionName) => {
    const [entries, setEntries] = useState([]);
    const db = firebase.firestore();
    
    useEffect(() => {
        const unsubscribe = db
        .collection(collectionName)
        .onSnapshot((snapshot) => {
            const newEntry = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setEntries(newEntry);
            })
        return () => unsubscribe();
    },[])

    return entries;
};