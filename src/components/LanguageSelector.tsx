import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages = [
  { code: "zh-TW" as Language, name: "繁體中文", flag: "🇹🇼" },
  { code: "zh-CN" as Language, name: "简体中文", flag: "🇨🇳" },
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "ko" as Language, name: "한국어", flag: "🇰🇷" },
];

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = (languageCode: Language) => {
    setLanguage(languageCode);
    console.log(`切換到語言: ${languageCode}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <Globe className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
            </div>
            {currentLanguage === language.code && (
              <Check className="w-4 h-4 text-accent" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;