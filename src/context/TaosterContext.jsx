import { createContext } from "react";
import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
    const addToCartToast = () => toast('Added successfully');
    const deleteFromCartToast = () => toast('Deleted successfully');
    const signUpToast = () => toast('User Registered Successfully!');
    const signInToast = () => toast('Signed In Successfully!');
    const signOutToast = () => toast('Signed Out Successfully!');
    const resetPasswordToast = () => toast('Password reset email sent!');

    return(
        <ToastContext.Provider value={{ 
            addToCartToast, 
            deleteFromCartToast, 
            signUpToast, 
            signInToast, 
            resetPasswordToast, 
            signOutToast 
            }}
        >
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;