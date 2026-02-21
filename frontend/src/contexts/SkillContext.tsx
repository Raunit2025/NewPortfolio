import { createContext, useContext, useState, ReactNode } from "react";

interface SkillContextType {
  selectedSkill: string;
  setSelectedSkill: React.Dispatch<React.SetStateAction<string>>;
}

const SkillContext = createContext<SkillContextType | undefined>(undefined);

export const SkillProvider = ({ children }: { children: ReactNode }) => {
  // ✅ Default is now "All"
  const [selectedSkill, setSelectedSkill] = useState<string>("All");

  return (
    <SkillContext.Provider value={{ selectedSkill, setSelectedSkill }}>
      {children}
    </SkillContext.Provider>
  );
};

export const useSkill = () => {
  const context = useContext(SkillContext);
  if (!context) {
    throw new Error("useSkill must be used within a SkillProvider");
  }
  return context;
};