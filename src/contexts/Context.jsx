import { createContext, useContext, useState } from "react";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMensalOpen, setIsModalMensalOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isModalMensalOpen,
        setIsModalMensalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => useContext(Context);
