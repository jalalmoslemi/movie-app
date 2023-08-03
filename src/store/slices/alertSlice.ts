import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

interface Alert {
  message: string;
  success: boolean;
  show: boolean;
}

const alertSlice = createSlice({
  name: 'alert',
  initialState: { message: '', success: false, show: false },
  reducers: {
    showAlert: (state, action: PayloadAction<Alert>) => {
      return action.payload;
    },
    hideAlert: () => {
      return { message: '', success: false, show: false };
    },
  },
});

export default alertSlice;

export const alertAction = alertSlice.actions;
export const alertSelector = (state: RootState) => state.alert;
