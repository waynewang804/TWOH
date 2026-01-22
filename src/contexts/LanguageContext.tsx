import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "zh-TW" | "zh-CN" | "en" | "ko";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // 從 localStorage 讀取保存的語言偏好，如果沒有則使用繁體中文
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("preferred-language");
    return (saved as Language) || "zh-TW";
  });

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // 保存到 localStorage
    localStorage.setItem("preferred-language", language);
    console.log(`語言已切換到: ${language}`);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};