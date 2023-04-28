import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';


function PostList({ user,firebase }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('posts').orderBy('createdAt', 'desc').onSnapshot((querySnapshot) => {
      const newPosts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(newPosts);
    });

    return unsubscribe;
  }, []);

  const handleLikeToggle = async (postId) => {
    try {
      const postRef = firebase.firestore().collection('posts').doc(postId);
      const postSnapshot = await postRef.get();
      const post = postSnapshot.data();
      const userId = user.uid;

      if (post.likes.includes(userId)) {
        post.likes = post.likes.filter((likeUserId) => likeUserId !== userId);
      } else {
        post.likes.push(userId);
      }

      await postRef.update({ likes: post.likes });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentAdd = async (postId, commentText) => {
    try {
      const postRef = firebase.firestore().collection('posts').doc(postId);
      const postSnapshot = await postRef.get();
      const post = postSnapshot.data();
      const comment = {
        text: commentText,
        user: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      };

      await postRef.update({ comments: [...post.comments, comment] });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.imageUrl} alt={post.caption} />
          <p>{post.caption}</p>
          <p>Posted by {post.user.displayName}</p>
          <p>{post.likes.length} likes</p>
          <button onClick={() => handleLikeToggle(post.id)}>
            {post.likes.includes(user.uid) ? 'Unlike' : 'Like'}
          </button>
          <ul>
            {post.comments.map((comment) => (
              <li key={comment.createdAt.toMillis()}>
                <p>{comment.text}</p>
                <p>Commented by {comment.user.displayName}</p>
              </li>
            ))}
          </ul>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleCommentAdd(post.id, e.target.comment.value);
            e.target.comment.value = '';
          }}>
            <input type="text" name="comment" placeholder="Add a comment" />
            <button type="submit">Post</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default PostList;
