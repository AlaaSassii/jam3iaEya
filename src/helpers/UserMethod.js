import { db } from "../conf/firebase";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

export const usersCollectionRef = collection(db, "users");

export const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const createUser = async (newName, newAge) => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
};

export const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
};

export const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
};

