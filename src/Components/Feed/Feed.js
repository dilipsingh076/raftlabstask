import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) return;
      const followingRef = firebase.firestore().collection('users').doc(currentUser.uid).collection('following');
      const followingSnapshot = await followingRef.get();
      const followingIds = followingSnapshot.docs.map((doc) => doc.id);
      const postsRef = firebase.firestore().collection('posts');
      const postsSnapshot = await postsRef.where('userId', 'in', followingIds).orderBy('createdAt', 'desc').get();
      const postsData = postsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>News Feed</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Posted by {post.username} on {new Date(post.createdAt.toDate()).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
