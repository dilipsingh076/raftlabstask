import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const FollowButton = ({ userId }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIfFollowing = async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        const followingRef = firebase
          .firestore()
          .collection("following")
          .doc(user.uid)
          .collection("userFollowing")
          .doc(userId);
        const followingDoc = await followingRef.get();
        if (followingDoc.exists) {
          setIsFollowing(true);
        }
      }
      setLoading(false);
    };

    checkIfFollowing();
  }, [userId]);

  const handleFollow = async () => {
    const user = firebase.auth().currentUser;
    if (user) {
      const followingRef = firebase
        .firestore()
        .collection("following")
        .doc(user.uid)
        .collection("userFollowing")
        .doc(userId);
      const followedRef = firebase
        .firestore()
        .collection("followers")
        .doc(userId)
        .collection("userFollowers")
        .doc(user.uid);

      if (isFollowing) {
        // Unfollow the user
        await followingRef.delete();
        await followedRef.delete();
        setIsFollowing(false);
      } else {
        // Follow the user
        const following = {
          userId: userId,
          displayName: "User Display Name", // replace with actual display name
          photoURL: "User Profile Picture URL", // replace with actual profile picture URL
        };
        const followed = {
          userId: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        await followingRef.set(following);
        await followedRef.set(followed);
        setIsFollowing(true);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <button onClick={handleFollow}>
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
