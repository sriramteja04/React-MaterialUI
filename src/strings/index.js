import LocalizedStrings from 'react-localization';
import { uiElements } from './uiElements';
import { placeHolders } from './placeHolders';

export const strings = new LocalizedStrings({
    en: {
        ...uiElements.en,
        ...placeHolders.en,
    },
    es: {
        ...uiElements.es,
        ...placeHolders.es,
    },
});
