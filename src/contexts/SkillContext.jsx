import { createContext, useState, useContext } from 'react';

const SkillContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSkill = () => {
  return useContext(SkillContext);
};

export const SkillProvider = ({ children }) => {
  const [selectedSkill, setSelectedSkill] = useState('All');

  return (
    <SkillContext.Provider value={{ selectedSkill, setSelectedSkill }}>
      {children}
    </SkillContext.Provider>
  );
};