import axios from "axios";
import useSWR from "swr";

function fetchGitHubUser(username) {
  if (username) {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => response.data);
  } else {
    return null; 
  }
}

export default function useGithubUser(username) {
  const { data, error } = useSWR(username, fetchGitHubUser);

  return {
    data,
    loading: !data && !error,
    error,
  };
}
