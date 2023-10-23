import axios from "axios";
import useSWR from "swr";

function fetchGitHubUser(username) {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => response.data);
}

export default function useGithubUser(username) {
  const { data, error } = useSWR(username, fetchGitHubUser);

  return {
    data,
    loading: !data && !error,
    error,
  };
}

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function useGithubUser(username) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError]= useState(null)

//   function fetchGitHubUser(username) {
//     setLoading(true)
//     setError(null)
//     axios
//       .get(`https://api.github.com/users/${username}`)
//       .then((response) => setData(response.data))
//       .catch((e) => setError(e), setData(null))
//       .finally(setLoading(false));
//   }
//   useEffect(() => {
//     fetchGitHubUser(username);
//   }, [username]);

//   return {data , loading, error};
// }
