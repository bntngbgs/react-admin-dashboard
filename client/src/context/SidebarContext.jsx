import { createContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
