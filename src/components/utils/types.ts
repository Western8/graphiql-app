export interface IReqHeader {
  key: string;
  value: string;
}

export interface IDataItem {
  email: string;
  password: string;
}

export interface IDataProps {
  data: IDataItem;
  last: boolean;
}
