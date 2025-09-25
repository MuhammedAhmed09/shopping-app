import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { UserContext } from "../context/UserContext"
import { PiUserCircleLight } from "react-icons/pi";
import SignOut from "../authentication/SignOut";
import UserInfo from "../components/UserInfo";

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
    <div className="relative">
    {userInfo && user && 
      <div className="absolute bg-white border rounded-lg border-primary/10 shadow p-1 top-10 text-sm w-64 right-4">
          <UserInfo />
      </div>
    }
    </div>
    </>
  );
};

export default AuthStatus;
