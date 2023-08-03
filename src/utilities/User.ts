export interface User {
  id: number;
  token?: string;
  userName: string;
  photo?: string;
  name: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  isAdmin?: boolean;
}
