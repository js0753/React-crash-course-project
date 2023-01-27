import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';
function Posts() {
  
  return (
    <>
    <Outlet/>
      <main>
        <PostsList  />
      </main>
    </>

  );
}

export default Posts; 

export async function loader(){
  const resp = await fetch('http://localhost:8080/posts');
  const resData = await resp.json();
  return resData.posts;
}