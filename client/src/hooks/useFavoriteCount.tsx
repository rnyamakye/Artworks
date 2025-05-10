// hooks/useFavoriteCount.ts
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export function useFavoriteCount() {
  const { currentUser } = useAuth();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!currentUser) {
      setCount(0);
      return;
    }
    const ref = collection(db, "users", currentUser.uid, "favorites");
    const unsubscribe = onSnapshot(ref, (snap) => {
      setCount(snap.size);
    });
    return () => unsubscribe();
  }, [currentUser]);

  return count;
}
