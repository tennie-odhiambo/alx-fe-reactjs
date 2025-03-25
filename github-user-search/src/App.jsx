import { useState } from "react";
import Search from "./components/Search";
import { fetchUsers } from "./services/githubService";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError("");
    const results = await fetchUsers(searchParams);
    setUsers(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Search onSearch={handleSearch} />
      {loading && <p className="text-lg text-gray-600 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      
      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow-lg rounded-lg">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
            <h3 className="text-xl text-center mt-2">{user.login}</h3>
            <p className="text-gray-600 text-center">{user.location || "No location"}</p>
            <p className="text-gray-600 text-center">Repos: {user.public_repos || "N/A"}</p>
            <a href={user.html_url} target="_blank" className="block text-center text-blue-500 mt-2">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
