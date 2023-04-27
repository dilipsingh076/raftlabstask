import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [taggedUserIds, setTaggedUserIds] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) return;
    const postsRef = firebase.firestore().collection('posts');
    const newPostData = {
      userId: currentUser.uid,
      username: currentUser.displayName,
      title,
      content,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      taggedUserIds,
    };
    const newPostRef = await postsRef.add(newPostData);
    if (image) {
      const imageRef = firebase.storage().ref(`posts/${newPostRef.id}`);
      await imageRef.put(image);
      const imageUrl = await imageRef.getDownloadURL();
      await newPostRef.update({ imageUrl });
    }
    setTitle('');
    setContent('');
    setImage(null);
    setTaggedUserIds([]);
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} />
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={(event) => setImage(event.target.files[0])} />
        <label htmlFor="taggedUserIds">Tag Users:</label>
        <input type="text" id="taggedUserIds" value={taggedUserIds.join(', ')} onChange={(event) => setTaggedUserIds(event.target.value.split(',').map((id) => id.trim()))} />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
