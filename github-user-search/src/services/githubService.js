import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";

/**
 * Fetch users from GitHub based on search criteria.
 * @param {string} query - The username or keywords to search.
 * @param {string} location - The location filter (optional).
 * @param {number} minRepos - The minimum number of repositories (optional).
 */
export const fetchUsers = async (query, location = "", minRepos = 0) => {
  try {
    // Build search query string
    let searchQuery = `q=${query}`;

    if (location) searchQuery += `+location:${location}`;
    if (minRepos > 0) searchQuery += `+repos:>${minRepos}`;

    // Make API call
    const response = await axios.get(`${GITHUB_API_URL}?${searchQuery}`);
    return response.data.items; // GitHub returns results in `items` array
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};
