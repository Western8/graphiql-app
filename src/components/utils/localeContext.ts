import React, { Dispatch, SetStateAction } from 'react';
import { ILocale } from './types';

export const localeEn: ILocale = {
  id: 'en',
  name: 'En',
  prettify: 'Prettify query',
  doc: 'Doc',
  run: 'Run',
  welcome: 'Welcome',
  welcomeTitle: 'Welcome to GraphiQL-app !',
  welcomeDesc: 'GraphiQL is a playground/IDE for graphQL requests.',
  playground: 'Playground',
  signUp: 'Sign up',
  signIn: 'Sign in',
  signOut: 'Sign out',
  email: 'E-mail :',
  password: 'Password :',
  submit: 'Submit',
  go: "Let's go!",
  goPlayground: 'Go to Playground GraphiQL',
  endpoint: 'Endpoint:',
  variables: 'Variables:',
  headers: 'Headers:',
  headerKey: 'header-key',
  headerValue: 'header-value',
  show: 'Show',
  hide: 'Hide',
  add: 'Add',
  text404: "Oooops... This page doesn't exist!",
  yupEmailRequired: 'E-mail is a required field',
  yupPasswordRequired: 'Password is a required field',
  yupPasswordMin: 'Password must contain at least 8 characters',
  yupPasswordLetter: 'Password must contain one letter',
  yupPasswordCharacter: 'Password must contain one special character',
  yupPasswordNumber: 'Password must contain one number',
};

export const localeRu: ILocale = {
  id: 'ru',
  name: 'Ru',
  prettify: 'Форматировать',
  doc: 'Документация',
  run: 'Старт',
  welcome: 'Главная',
  welcomeTitle: 'Добро пожаловать в приложение GraphiQL !',
  welcomeDesc: 'GraphiQL - песочница для выполнения graphQL-запросов.',
  playground: 'Песочница',
  signUp: 'Регистрация',
  signIn: 'Вход',
  signOut: 'Выход',
  email: 'Адрес ЭП :',
  password: 'Пароль :',
  submit: 'Отправить',
  go: 'Давай попробуем!',
  goPlayground: 'Перейти в песочницу GraphiQL',
  endpoint: 'Адрес:',
  variables: 'Переменные:',
  headers: 'Заголовки:',
  headerKey: 'ключ заголовка',
  headerValue: 'значение заголовка',
  show: 'Показать',
  hide: 'Скрыть',
  add: 'Добавить',
  text404: 'Упс... Эта страница не существует у нас.',
  yupEmailRequired: 'Адрес электронной почты обязателен для заполнения',
  yupPasswordRequired: 'Пароль обязателен для заполнения',
  yupPasswordMin: 'Пароль должен содержать как минимум 8 символов',
  yupPasswordLetter: 'Пароль должен содержать как минимум 1 букву',
  yupPasswordCharacter: 'Пароль должен содержать как минимум 1 специальный символ',
  yupPasswordNumber: 'Пароль должен содержать как минимум 1 цифру',
};

export const locale = {
  en: localeEn,
  ru: localeRu,
};

interface ILocaleContext {
  useLocale: ILocale;
  setLocale: Dispatch<SetStateAction<ILocale>>;
}

export const LocaleContext = React.createContext<ILocaleContext>({
  useLocale: locale['en'],
  setLocale: () => {},
});
