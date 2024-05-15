import React, { ReactNode } from "react";
import { ReferenceTypes } from "./types";
import useReference from "./useReference";
import { useLocalization } from "@thenudge/l10n";

interface ReferenceNumberProps {
  referenceNumber : string;
}

export interface extractBasedOnLanguageParams {
    l10nObject : Record<string, unknown> | string
    language : string;
}

interface ExtractReferenceType {
    referenceId : string;
    reference : ReferenceTypes,
}

const extractBasedOnLanguage = ({l10nObject, language = 'en' } : extractBasedOnLanguageParams) : Record<string, object> | unknown => {
    if (typeof l10nObject === 'object') {
      if (l10nObject['ul']) {
        return l10nObject['ul']
      } else if (l10nObject[language]) {
        return l10nObject[language]
      } else {
        return l10nObject['en']
      }
    } else {
      return l10nObject
    }
  }

  const extractReferenceId = ({referenceId, reference} :  ExtractReferenceType) => {
    for (const key in reference) {
      const references = reference[key];
      const foundReference = references.find(ref => ref.reference_id === referenceId);
      if (foundReference) {
        return foundReference.reference_name_l10n
      }
    }
    return ''
  }

const ReferenceNumber : React.FC<ReferenceNumberProps> = ({ referenceNumber }) => {
    const { reference } = useReference();
    const { currentLanguage } = useLocalization()
    const refName =  extractReferenceId({reference, referenceId : referenceNumber})
    const value = extractBasedOnLanguage({l10nObject : refName as string, language : currentLanguage})
    return <>{value}</>;
};

export default ReferenceNumber;
