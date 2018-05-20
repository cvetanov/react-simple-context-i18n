import get from './tools/get';

const combineLanguageWithId = (language, id) => `${language}.${id}`;

const LANGUAGE = 'en';
const TRANSLATIONS = {};

const TRANSLATOR = ({ language, translations, id }) =>
  get(translations, combineLanguageWithId(language, id));

const CONTEXT = {
  language: LANGUAGE,
  translations: TRANSLATIONS,
  translator: TRANSLATOR,
};

export {
  LANGUAGE,
  TRANSLATIONS,
  TRANSLATOR,
  CONTEXT,
};
