import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { User } from '../../utilities/User';

const userSlice = createSlice({
  name: 'user',
  initialState: {} as User,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      if (action.payload.token)
        localStorage.setItem('token', action.payload.token);

      return action.payload;
    },

    logout: () => {
      localStorage.removeItem('token');
      return {} as User;
    },
  },
});

export const userAction = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice;
