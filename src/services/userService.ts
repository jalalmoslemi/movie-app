import { LoginUser } from '../hooks/useUser';
import { FetchData } from '../utilities/FetchData';
import { User } from '../utilities/User';
import ApiService from './apiService';

class UserService extends ApiService {
  constructor() {
    super();
  }

  getUserByToken = (endpoint: string, token: { token: string }) => {
    return this.query
      .post<FetchData<User>>(endpoint, token)
      .then(res => res.data);
  };

  getUserInLogin = (endpoint: string, data: LoginUser) => {
    return this.query
      .post<FetchData<User>>(endpoint, data)
      .then(res => res.data);
  };

  getEmailExists = (endpoint: string, data: { email: string }) => {
    return this.query
      .post<FetchData<boolean>>(endpoint, data)
      .then(res => res.data);
  };

  signupUser = (endpoint: string, data: User) => {
    return this.query
      .post<FetchData<User>>(endpoint, data)
      .then(res => res.data);
  };
}

export default UserService;
