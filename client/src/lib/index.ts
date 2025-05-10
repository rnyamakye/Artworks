import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";


export const getData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Data fetching error" + response?.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while fetching data: ", error);
    throw error;
  }
};


export async function fetchFavoritesFromFirebase(userId: string) {
  const ref = collection(db, "users", userId, "favorites");
  const snap = await getDocs(ref);
  return snap.docs.map((doc) => doc.data());
}
