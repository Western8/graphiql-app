export interface IReqHeader {
  key: string;
  value: string;
}

export interface IPropsPopup {
  message: string;
}

export interface IPrivateRouteProps {
  isAuth: boolean;
  authPath: string;
  outlet: JSX.Element;
};

/*
export interface IPropsPrivateRoute {
  children: string;
  hasAuth?: boolean;
}
*/

export interface IDataItem {
  email: string;
  password: string;
}

export interface IDataProps {
  data: IDataItem;
  last: boolean;
}

export interface ILocale {
    id: string,
    name: string,
    prettify: string,
    doc: string,
    run: string,
    welcome: string,
    welcomeTitle: string,
    welcomeDesc: string,
    playground: string,
    signUp: string,
    signIn: string,
    signOut: string,
    email: string,
    password: string,
    submit: string,
    go: string,
    goPlayground: string,
    endpoint: string,
    variables: string,
    headers: string,
    headerKey: string,
    headerValue: string,
    show: string,
    hide: string,
    add: string,
    text404: string,
    yupEmailRequired: string,
    yupPasswordRequired: string,
    yupPasswordMin: string,
    yupPasswordLetter: string,
    yupPasswordCharacter: string,
    yupPasswordNumber: string,
}


