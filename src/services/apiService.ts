import axios, { AxiosInstance } from 'axios';

class ApiService {
  protected query: AxiosInstance;
  private authToken: string | null;

  constructor() {
    this.authToken = localStorage.getItem('token');

    this.query = axios.create({
      baseURL: 'http://localhost/api',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authToken}`,
      },
    });
  }
}

export default ApiService;
