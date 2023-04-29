// import React, { useEffect, useState } from 'react'
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../../lib/firebase';
// export default function UseAuth() {
//     const [currentUser, setCurrentUser] = useState(null)
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setCurrentUser(user)
//             }
//             else {
//                 setCurrentUser(null);
//             }
//         })
//         return unsubscribe;
//     }, [])
//     return currentUser
// }
