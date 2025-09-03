import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { UserContext } from "../context/UserContext"
import { PiUserCircleLight } from "react-icons/pi";
import SignOut from "../authentication/SignOut";

const AuthStatus = () => {
    const [userInfo, setUserInfo] = useState(false);
    const { user } = useContext( UserContext );

    const handleUserInfo = () => {
        setUserInfo(prev => !prev);
    };

  return (
    <>
    <div>
      {user ? (
        <button 
            onClick={handleUserInfo}
            aria-label="User menu"
            className="transition-transform duration-500 transform hover:scale-105 cursor-pointer"
        >
            <PiUserCircleLight />
        </button>
      ) : (
        <Link 
            to={'signin'}
            aria-label='Signin' 
            className="transition-transform duration-500 transform hover:scale-105"
        >
            <i>
                <CiUser />
            </i>
        </Link>
      )}
    </div>
    {userInfo && user &&  (
    <div className="absolute mt-9 mr-20 w-48 bg-white rounded-xl shadow-lg p-4">
        <p className="text-sm text-gray-700 mb-2">Welcome, {user.email}</p>
        <SignOut />
    </div>
    )}
    </>
  );
};

export default AuthStatus;
