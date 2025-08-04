import { createContext } from "react";
import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
    const addToCartToast = () => toast('Added successfully');
    const deleteFromCartToast = () => toast('Deleted successfully');

    return(
        <ToastContext.Provider value={{ addToCartToast, deleteFromCartToast }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;