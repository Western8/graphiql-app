import { createSlice } from '@reduxjs/toolkit';
import { IData, IDataItem } from '../../types';

const initialState: IData = {
  title: 'Unknown',
  dataList: [],
};

const slice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setDataList(state, action) {
      const dataItem: IDataItem = {
        name: action.payload.dataItem.name,
        age: action.payload.dataItem.age,
        email: action.payload.dataItem.email,
        password1: action.payload.dataItem.password1,
        password2: action.payload.dataItem.password2,
        gender: action.payload.dataItem.gender,
        accept: action.payload.dataItem.accept,
        img: action.payload.dataItem.img,
        country: action.payload.dataItem.country,
      };
      state.dataList.push(dataItem);
    },
  },
});

export const { setDataList } = slice.actions;

export default slice.reducer;
