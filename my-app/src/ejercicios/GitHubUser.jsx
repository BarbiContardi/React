/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function GitHubUser({ username }) {
  const [data, setData] = useState(null);
  async function fetchGitHubUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);
  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <h2>{data.login}</h2>
          <img src={data.avatar_url} alt="Avatar" />
        </div>
      )}
    </div>
  );
}
