import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import alertSlice from './slices/alertSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
