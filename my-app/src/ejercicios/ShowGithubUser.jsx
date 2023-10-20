import { useParams } from 'react-router-dom';
import GitHubUser from './GitHubUser'

function ShowGithubUser() {
  const { username } = useParams();

  return (
    <div>
      <GitHubUser username={username} />
    </div>
  );
}

export default ShowGithubUser;