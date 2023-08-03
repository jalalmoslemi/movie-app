import { useAppSelector } from '../../hooks/store/selectorHook';
import SignupForm from './components/SignupForm';
import style from './signupPage.module.css';

function SignupPage() {
  const user = useAppSelector(state => state.user);

  if (user.email) {
    throw new Error('اجازه ی دسترسی به این مسیر را ندارید');
  }
  return (
    <section className={' ' + style.signup}>
      <SignupForm />
    </section>
  );
}

export default SignupPage;
