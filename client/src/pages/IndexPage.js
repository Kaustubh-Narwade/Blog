import { useEffect, useState } from "react";
import Post from "../Post";
import { BACKEND_URL } from './Exports';

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URL}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts)
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post}/>
      ))} 
    </>
  );
}
