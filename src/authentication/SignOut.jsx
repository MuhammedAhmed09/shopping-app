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
      error(error.massege);
    }
  };

  return <button 
    type="submit" 
    onClick={handleSignOut}
    className="cursor-pointer text-red-600 text-2xl border border-red-500 w-full px-1 py-3"
  >
    Sign Out
  </button>;
};

export default SignOut;
