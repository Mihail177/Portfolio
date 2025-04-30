import React, { createContext, useContext, useState, ReactNode } from "react";

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);

export const ActiveSectionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};
