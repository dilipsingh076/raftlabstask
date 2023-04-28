import React, { useState } from 'react';
import { storage,db,firebase } from '../../firebase-config';
function PostForm({ user }) {
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handlePostUpload = async () => {
    try {
      const imageRef = storage.ref(`images/${user.uid}/${imageFile.name}`);
      const snapshot = await imageRef.put(imageFile);
      const imageUrl = await snapshot.ref.getDownloadURL();

      const post = {
        caption,
        imageUrl,
        user: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes: [],
        comments: [],
      };

      await db.collection('posts').add(post);

      setCaption('');
      setImageFile(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handlePostUpload}>Upload</button>
    </div>
  );
}

export default PostForm;
