// import { useStore } from "../store/store"; // <-- Zustand store

import { Heart } from "lucide-react";

export default function FavoritePage() {
  return (
    <main className="w-full max-w-3xl mx-auto px-4 py-12">
      {/* <h1 className="text-2xl font-bold mb-6">Your Favorites</h1>
      <div className="mb-4 text-gray-600">
        Favorites Count: {favorites.length}
      </div>
      {favorites.length === 0 ? (
        <p className="text-gray-600">You have not favorited any content yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((fav) => (
            <div key={fav.id} className="bg-white rounded shadow p-4">
              <h2 className="font-semibold text-lg">{fav.title}</h2>
              <p className="text-gray-600">{fav.description}</p>
              <div className="text-xs text-gray-400 mt-2">{fav.type}</div>
            </div>
          ))}
        </div>
      )} */}
    </main>
  );
}
