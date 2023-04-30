import { useContext } from 'react';
import User from './user';
import Suggestions from './suggestions';
import {LoggedInUserContext} from '../../Context/firebase';

export default function Sidebar() {
  const { user: { docId = '', fullName, username, userId, following } = {} } = useContext(
    LoggedInUserContext
  )|| {};
  console.log(fullName)

  return (
    <div>
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
}
