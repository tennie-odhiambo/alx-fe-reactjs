import axios from "axios";

const API_BASE_URL = "https://api.github.com/search/users";

export const fetchUsers = async ({ username, location, repos }) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (repos) query.push(`repos:>${repos}`);

  const searchQuery = query.join("+");
  const url = `${API_BASE_URL}?q=${searchQuery}`;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
