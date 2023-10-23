import { useParams } from "react-router-dom";
import useSWR from "swr";

export default function useGithubUser() {
  const { username } = useParams();
  const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`);

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
