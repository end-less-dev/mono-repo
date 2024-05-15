import { useContext } from "react";
import { LocalizationContext } from "./LocalizationProvider";

const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      "useLocalization must be used within a LocalizationProvider"
    );
  }

  type TransalationProp = {
    key?: string | undefined;
    data?: { [key: string]: string };
  };

  const translate = ({ key, data }: TransalationProp) => {
    if (key) {
      return context.localization[key] || key;
    }
    if (data) {
      return data?.[context.currentLanguage];
    }

    return key || "no translation";
    // Return the translation or the key if translation is not found
  };

  return { ...context, translate };
};

export default useLocalization;
