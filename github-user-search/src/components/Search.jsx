import { useState } from "react";
import { fetchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const results = await fetchUsers({ username, location, repos });
      setUsers(results);
    } catch {
      setError("Failed to fetch users. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">GitHub User Search</h2>
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-lg text-gray-600 mt-4">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Search Results */}
      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} className="p-4 bg-white shadow-lg rounded-lg">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h3 className="text-xl text-center mt-2">{user.login}</h3>
              <p className="text-gray-600 text-center">{user.location || "No location"}</p>
              <p className="text-gray-600 text-center">Repos: {user.public_repos || "N/A"}</p>
              <a
                href={user.html_url}
                target="_blank"
                className="block text-center text-blue-500 mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
