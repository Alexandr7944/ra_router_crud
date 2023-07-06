import PostEdit from '../components/PostEdit';
import useFetching from '../hooks/useFetching';
import { useNavigate, useParams } from 'react-router-dom';

const PostEditPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  const url = 'http://localhost:7070/posts/' + postId;
  const option = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const {data, error, loading} = useFetching( url, option );
  const post = data && !Array.isArray(data) && data.post;

  return (
    post && <PostEdit post={post}/>
  )
}

export default PostEditPage