/* eslint-disable no-nested-ternary */
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import {LoggedInUserContext} from '../Context/firebase';
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline() {

  const { user } = useContext(LoggedInUserContext)|| {};
  console.log("user timeline", user)

  const { user: { following } = {} } = useContext(
    LoggedInUserContext
  )|| {};

  const { photos } = usePhotos(user);
 

  return (
    <div>
      {following===undefined ?(
        <Skeleton count={2} width={640} height={500} />
      ) : following.length===0 ?(
        <p>Follow other people to see Photos</p>
      ) : photos? (
       photos.map((content) => <Post key={content.docId} content={content} />)          
      ) : null}

      
    </div>
  );
}

