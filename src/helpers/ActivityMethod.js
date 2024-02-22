import { db } from "../conf/firebase";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

export const activitiesCollectionRef = collection(db, "activities");

export const getActivities = async () => {
    const data = await getDocs(activitiesCollectionRef);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const createActivity = async (title, description) => {
    await addDoc(activitiesCollectionRef, { title, description });
};

export const updateActivity = async (id, title, description) => {
    const activityDoc = doc(db, "activities", id);
    const newFields = { title, description };
    await updateDoc(activityDoc, newFields);
};

export const deleteActivity = async (id) => {
    const activityDoc = doc(db, "activities", id);
    await deleteDoc(activityDoc);
};
