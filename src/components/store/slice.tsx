import { createSlice } from '@reduxjs/toolkit';
import { IDataItem } from '../utils/types';

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
        email: action.payload.dataItem.email,
        password: action.payload.dataItem.password,
      };
      state.dataList.push(dataItem);
    },
  },
});

export const { setDataList } = slice.actions;

export default slice.reducer;
