import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useUserToken } from '../hooks/useUser';
import { userAction } from '../store/slices/userSlice';
import Header from './Header';

import Footer from './Footer';
import Alert from '../components/Alert/Alert';
import Laoding from '../components/Loading';

function Layout() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  if (token) {
    const { data, isLoading, isSuccess } = useUserToken({ token: token });
    if (isLoading) return <Laoding />;
    if (isSuccess) dispatch(userAction.login(data.data));
  }

  return (
    <>
      <Header />

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />

      <Alert />
    </>
  );
}

export default Layout;
