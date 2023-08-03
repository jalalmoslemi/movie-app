import { useMutation, useQuery } from '@tanstack/react-query';
import UserService from '../services/userService';
import { FetchData } from '../utilities/FetchData';
import { User } from '../utilities/User';

export interface LoginUser {
  userOrEmail: string;
  password: string;
}

export const useUserToken = (token: { token: string }) => {
  const userService = new UserService();

  return useQuery<FetchData<User>, Error>({
    queryKey: ['user-token'],
    queryFn: () => userService.getUserByToken('/auth', token),
    retry: 0,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    networkMode: 'always',
  });
};

export const useUserLogin = () => {
  const userService = new UserService();
  return useMutation({
    mutationFn: (data: LoginUser) => userService.getUserInLogin('/login', data),
    networkMode: 'always',
  });
};

export const useUserEmail = () => {
  const userService = new UserService();
  return useMutation({
    mutationFn: (data: { email: string }) =>
      userService.getEmailExists('/signup/email', data),
    networkMode: 'always',
  });
};

export const useUserSignup = () => {
  const userService = new UserService();
  return useMutation({
    mutationFn: (data: User) => userService.signupUser('/signup', data),
    networkMode: 'always',
  });
};
