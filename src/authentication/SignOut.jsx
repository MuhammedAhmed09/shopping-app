import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { ToastContext } from "../context/TaosterContext";

const SignOut = () => {
  const { signOutToast } = useContext(ToastContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      signOutToast();

    } catch (error) {
      console.error(error.massege);
    }
  };

  return <button 
    type="button" 
    onClick={handleSignOut}
     className="absolute cursor-pointer p-2 mt-1 right-0 w-24 text-center bg-white border border-gray-200 text-primary/70 font-semibold rounded-lg shadow-md z-10"
  >
    Sign Out
  </button>;
};

export default SignOut;
