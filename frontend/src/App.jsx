import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Erreur récupération stats :", error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000); // Refresh toutes les 5 sec
    return () => clearInterval(interval);
  }, []);

  if (!stats)
    return <div className="text-center mt-10 text-lg">Chargement...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-10">
      <h1 className="text-3xl font-bold">Stats Réseaux Sociaux</h1>
      <div className="grid grid-cols-3 gap-8">
        {/* YouTube */}
        <div className="bg-red-600 p-6 rounded-2xl shadow-lg w-64 text-center">
          <h2 className="text-xl font-bold mb-2">YouTube</h2>
          <p>Abonnés : {stats.youtube.followers}</p>
          <p>Likes : {stats.youtube.likes}</p>
          <p>Commentaires : {stats.youtube.comments}</p>
        </div>

        {/* Instagram */}
        <div className="bg-pink-500 p-6 rounded-2xl shadow-lg w-64 text-center">
          <h2 className="text-xl font-bold mb-2">Instagram</h2>
          <p>Abonnés : {stats.instagram.followers}</p>
          <p>Likes : {stats.instagram.likes}</p>
          <p>Commentaires : {stats.instagram.comments}</p>
        </div>

        {/* TikTok */}
        <div className="bg-gray-700 p-6 rounded-2xl shadow-lg w-64 text-center">
          <h2 className="text-xl font-bold mb-2">TikTok</h2>
          <p>Abonnés : {stats.tiktok.followers}</p>
          <p>Likes : {stats.tiktok.likes}</p>
          <p>Commentaires : {stats.tiktok.comments}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
