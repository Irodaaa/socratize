import i18n from "i18next";
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';

import {initReactI18next} from "react-i18next";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['querystring', 'cookie'],
        cache: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    },
    react: {useSuspense: false},
    interpolation: {
        escapeValue: false
    }
})

export default i18n