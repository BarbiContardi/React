import axios from "axios";
import { useEffect, useState } from "react";

export default function useGithubUser(username) {
  const [data, setData] = useState(null);

  function fetchGitHubUser(username) {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => setData(response.data))
      .catch((e) => console.error("Error", e));
  }
  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return data;
}
