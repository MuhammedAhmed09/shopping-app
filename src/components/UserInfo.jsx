import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { BsThreeDotsVertical } from "react-icons/bs";
import SignOut from "../authentication/SignOut";

const UserInfo = () => {
    const [isLogOutBtnOpen, setIsLogOutBtnOpen] = useState(false);
    const { user } = useContext( UserContext );    

    const toggleLogOutBtn = () => {
        setIsLogOutBtnOpen(prev => !prev);
    };

  return (
    <div className="flex items-center justify-between">
        <p className="font-medium text-primary/70">{user?.email}</p>

        <div className="relative">
            <p
            onClick={toggleLogOutBtn}
            className="rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
            >
            <BsThreeDotsVertical className="text-lg text-primary/70" />
            </p>

            {isLogOutBtnOpen && (
            <div>
                <SignOut />
            </div>
            )}
        </div>
    </div>
  )
}

export default UserInfo