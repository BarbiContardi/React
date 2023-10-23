import axios from "axios";
import useSWR from "swr";

function fetchGitHubUser(username) {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => response.data);
}

export default function useGithubUser(username) {
  const { data, error, mutate } = useSWR(username, fetchGitHubUser);

  const refetch = () => {
    mutate();
  };

  return {
    data,
    loading: !data && !error,
    error,
    refetch,
  };
}
