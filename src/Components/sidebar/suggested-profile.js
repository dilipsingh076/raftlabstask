import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
  getUserByUserId
} from '../../services/firebase';
import {LoggedInUserContext} from '../../Context/firebase';

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId
}) {
  const [followed, setFollowed] = useState(false);
  const { setActiveUser } = useContext(LoggedInUserContext)|| {};
  console.log('setActive user',setActiveUser)

  async function handleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
    const [user] = await getUserByUserId(userId);
    setActiveUser(user);
  }

  return !followed ? (
    <div className='suggestProfileDiv' >
      <div>
        <img
          style={{height:"40px", width:"50px", borderRadius:'23px'}}
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/default.png`;
          }}
        />
        <NavLink className='navLinkDiv' to={`/p/${username}`}>
          <p>{username}</p>
        </NavLink>
      </div>
      <button
      className='allButton'
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
}
