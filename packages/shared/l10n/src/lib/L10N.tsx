import React, { ReactNode } from "react";
import useLocalization from "./useLocalization";

interface TranslateProps {
  l10nKey?: string;
  children?: { [key: string]: ReactNode };
}

const L10N: React.FC<TranslateProps> = ({ l10nKey, children }) => {
  const { translate, currentLanguage } = useLocalization();

  if (children) {
    return children[currentLanguage];
  }
  if (l10nKey || children) {
    return translate({ key: l10nKey });
  }

  return children;
};

export default L10N;
