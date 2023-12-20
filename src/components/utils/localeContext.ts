import React from "react";

export const localeEn = {
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
  go: 'Let\'s go!',
  goPlayground: 'Go to Playground GraphiQL',
  endpoint: 'Endpoint:',
  variables: 'Variables:',
  headers: 'Headers:',
  headerKey: 'header-key',
  headerValue: 'header-value',
  show: 'Show',
  hide: 'Hide',
  add: 'Add',
}

export const localeRu = {
  id: 'ru',
  name: 'Ru',
  prettify: 'Форматировать',
  doc: 'Документация',
  run: 'Старт',
  welcome: 'Добро пожаловать',
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
}

export const locale = {
  "en": localeEn,
  "ru": localeRu,
}

export const LocaleContext = React.createContext( { useLocale: locale['en'], setLocale: () => {} });