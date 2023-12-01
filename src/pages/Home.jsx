import { useState, useEffect, React} from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout} from "../config/firebase";

export default function Home() {

  // Authenticaton
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [userName, setuserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userImage, setuserImage] = useState("");


  useEffect(()=>{

    // Auth Error
    if (error){
      // console.log(error)
    }

    if (loading){

    }

    // If no user signed in go login
    if (!user) return navigate("/");

    //Fetch user names
    fetchUser();

	}, [user, loading])

  

  // Auth
  const fetchUser = async () => {
    try {
      setuserName(user.displayName);
      setEmail(user.email)
      setuserImage(user.photoURL)
    } catch (err) {
      //console.error(err);
      alert("An error occured while fetching user data");
    }
  };


  return (

    <>
          <div id='home'>
            <img id='profilepicture' src={userImage}></img>
            <p>{userName}</p>
            <p>{userEmail}</p>
            <button onClick={logout}> LOGOUT </button>
          </div>
    </>
  )
}
