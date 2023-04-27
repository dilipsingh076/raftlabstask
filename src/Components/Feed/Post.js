import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = async () => {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) return;
    const likesRef = firebase.firestore().collection('likes');
    const querySnapshot = await likesRef.where('postId', '==', post.id).where('userId', '==', currentUser.uid).get();
    if (querySnapshot.empty) {
      await likesRef.add({ postId: post.id, userId: currentUser.uid });
      setLiked(true);
      setLikesCount((count) => count + 1);
    } else {
      const likeId = querySnapshot.docs[0].id;
      await likesRef.doc(likeId).delete();
      setLiked(false);
      setLikesCount((count) => count - 1);
    }
  };

  const handleComment = async (event) => {
    event.preventDefault();
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) return;
    const commentsRef = firebase.firestore().collection('comments');
    await commentsRef.add({ postId: post.id, userId: currentUser.uid, username: currentUser.displayName, text: commentText });
    setCommentText('');
  };

  useEffect(() => {
    const likesRef = firebase.firestore().collection('likes');
    const unsubscribe = likesRef.where('postId', '==', post.id).onSnapshot((querySnapshot) => {
      setLikesCount(querySnapshot.size);
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const likedQuerySnapshot = querySnapshot.where('userId', '==', currentUser.uid);
        setLiked(!likedQuerySnapshot.empty);
      }
    });
    return unsubscribe;
  }, [post.id]);

  useEffect(() => {
    const commentsRef = firebase.firestore().collection('comments');
    const unsubscribe = commentsRef.where('postId', '==', post.id).orderBy('createdAt').onSnapshot((querySnapshot) => {
      const newComments = [];
      querySnapshot.forEach((doc) => {
        newComments.push({ id: doc.id, ...doc.data() });
      });
      setComments(newComments);
    });
    return unsubscribe;
  }, [post.id]);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <div>
        <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
        {likesCount} {likesCount === 1 ? 'like' : 'likes'}
      </div>
      <div>
        <h4>Comments</h4>
        {comments.map((comment) => (
          <div key={comment.id}>
            <strong>{comment.username}: </strong>
            <span>{comment.text}</span>
          </div>
        ))}
        <form onSubmit={handleComment}>
          <input type="text" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
