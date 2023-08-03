import { useAppSelector } from '../../hooks/store/selectorHook';
import Form from './components/Form';
import style from './loginPage.module.css';

function LoginPage() {
  const user = useAppSelector(state => state.user);

  if (user.email) {
    throw new Error('اجازه ی دسترسی به این مسیر را ندارید');
  }
  return (
    <section className={' ' + style.login}>
      <Form />
    </section>
  );
}

export default LoginPage;
