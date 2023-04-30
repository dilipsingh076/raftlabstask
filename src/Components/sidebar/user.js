import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { DEFAULT_IMAGE_PATH } from '../../Constants/paths';

export default function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <div className={'navLinkDiv'} >
    <NavLink className={'NavLinkText'} to={`/p/${username}`}>
      <div className='userImageDiv'>
        <img
        style={{width:"100%",borderRadius:"100%"}}
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = DEFAULT_IMAGE_PATH;
          }}
        />
      </div>
      <div className='userNameDiv' >
        <p>{username}</p>
        <p>{fullName}</p>
      </div>
    </NavLink>
    </div>
  );
}

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string
};
