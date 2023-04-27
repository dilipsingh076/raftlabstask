import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userRef = firebase.firestore().collection("users").doc(id);
      const userDoc = await userRef.get();
      if (userDoc.exists) {
        setUser(userDoc.data());
      }
    };

    const getPosts = async () => {
      const postsRef = firebase
        .firestore()
        .collection("posts")
        .where("userId", "==", id)
        .orderBy("createdAt", "desc");
      const postsSnapshot = await postsRef.get();
      setPosts(postsSnapshot.docs.map((doc) => doc.data()));
    };

    getUser();
    getPosts();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={user.profilePicture} alt="Profile" />
      <h2>{user.displayName}</h2>
      <p>{user.bio}</p>
      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <img src={post.imageUrl} alt="Post" />
          <p>{post.createdAt.toDate().toLocaleDateString()}</p>
          <p>{post.likes.length} likes</p>
          <h5>Comments</h5>
          {post.comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.content}</p>
              <p>{comment.createdAt.toDate().toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default User;
