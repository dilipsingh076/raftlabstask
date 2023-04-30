import { useEffect } from 'react';
import Header from '../Components/header';
import Timeline from '../Components/timeline';
import Sidebar from '../Components/sidebar';
import useUser from "../hooks/use-user";
import {LoggedInUserContext} from '../Context/firebase';

export default function Dashboard({ user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser?.uid);
  useEffect(() => {
    document.title = 'RaftLabs';
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div>
        <Header/>
        <div className='contentDiv' >
        <div className='timelineDiv' >
          <Timeline />
          </div>
          <div className='sidebarDiv' >
          <Sidebar />
          </div>
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}

// Dashboard.propTypes = {
//   user: PropTypes.object.isRequired
// };
