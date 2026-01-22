import { useLanguage, Language } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // 如果找不到翻譯，回退到繁體中文
        let fallbackValue: any = translations["zh-TW"];
        for (const fallbackKey of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
            fallbackValue = fallbackValue[fallbackKey];
          } else {
            return key; // 如果連繁體中文都沒有，返回 key
          }
        }
        return fallbackValue;
      }
    }
    
    return value;
  };

  return { t, currentLanguage };
};