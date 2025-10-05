import React, { createContext, useCallback, useContext, useState } from "react";
import Toast from "./Toast";

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export const useToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={message} open={open} onClose={handleClose} />
    </ToastContext.Provider>
  );
};
