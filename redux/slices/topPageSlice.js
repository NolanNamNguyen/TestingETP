import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingContent: false,
  examList: [],
};

export const topPageSlice = createSlice({
  name: 'topPageSlice',
  initialState,
  reducers: {
    getExamList: (state) => {
      state.loadingContent = true;
    },
    getExamListSuccess: (state, { payload }) => {
      state.loadingContent = false;
      state.examList = payload;
    },
    getExamListFailed: (state) => {
      state.loadingContent = false;
    },
  },
});

export const { getExamList, getExamListSuccess, getExamListFailed } =
  topPageSlice.actions;

export default topPageSlice.reducer;
