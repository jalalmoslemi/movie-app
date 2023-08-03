import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineKey, AiOutlineUser } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import z from 'zod';
import { useUserLogin } from '../../../hooks/useUser';
import { userAction } from '../../../store/slices/userSlice';
import style from './form.module.css';
import Laoding from '../../../components/Loading';
import { alertAction } from '../../../store/slices/alertSlice';

const schema = z.object({
  userOrEmail: z.string().min(3, { message: 'باید حداقل سه حرف باشد' }),
  password: z.string().min(1, { message: 'وارد کردن پسورد الزامی است' }),
});

type FormFace = z.infer<typeof schema>;

function Form() {
  const form = useForm<FormFace>({ resolver: zodResolver(schema) });
  const userLogin = useUserLogin();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doSubmit: SubmitHandler<FormFace> = value => {
    userLogin.mutate(value);
  };

  useEffect(() => {
    if (userLogin.data?.success) {
      navigate('/');
    }

    if (userLogin.data?.success === false) {
      dispatch(
        alertAction.showAlert({
          message: 'نام کاربری ، ایمیل یا گذرواژه می‌تواند اشتباه باشد',
          success: false,
          show: true,
        })
      );
    }

    return () => {
      if (userLogin.data?.success) {
        dispatch(userAction.login(userLogin.data.data));
        dispatch(
          alertAction.showAlert({
            message: 'با موفقیت وارد شدید',
            success: true,
            show: true,
          })
        );
      }
    };
  }, [userLogin.data?.success]);

  if (userLogin.isLoading) {
    return <Laoding />;
  }
  return (
    <>
      {/* {userLogin.data?.success === false && (
        <Alert
          message="نام کاربری ، ایمیل یا گذرواژه می‌تواند اشتباه باشد"
          success={false}
        />
      )} */}
      <div className={style.box}>
        <p className={'mb-5 ' + style.header}>ورود به سایت</p>

        <form className={style.form} onSubmit={form.handleSubmit(doSubmit)}>
          <div className={style.formBox}>
            <label htmlFor="email">نام کاربری یا ایمیل</label>
            <div>
              <input
                type="text"
                id="email"
                placeholder="ایمیل ..."
                {...form.register('userOrEmail')}
              />
              <span>
                <AiOutlineUser />
              </span>
            </div>
            {form.formState.errors.userOrEmail && (
              <p className={style.error}>
                {form.formState.errors.userOrEmail.message}
              </p>
            )}
          </div>

          <div className={style.formBox}>
            <label htmlFor="password">گذرواژه</label>
            <div>
              <input
                type="password"
                id="password"
                placeholder="گذرواژه ..."
                {...form.register('password')}
              />
              <span>
                <AiOutlineKey />
              </span>
            </div>
            {form.formState.errors.password && (
              <p className={style.error}>
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <div className={style.submit}>
            <button className="btn btn-success">ورود</button>
          </div>
        </form>

        <p className="my-3 px-2">
          اگر حساب ندارید،{' '}
          <Link to={'/signup'} className="text-decoration-none text-primary">
            ثبت نام
          </Link>{' '}
          کنید
        </p>
      </div>
    </>
  );
}

export default Form;
