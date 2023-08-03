import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

import { useEffect, useState } from 'react';
import { AiOutlineKey } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useUserEmail, useUserSignup } from '../../../hooks/useUser';
import style from './SignupForm.module.css';
// import Alert from '../../../components/Alert';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertAction } from '../../../store/slices/alertSlice';
import { userAction } from '../../../store/slices/userSlice';

const schema = z.object({
  userName: z.string().min(3, { message: 'باید حداقل سه کاراکتر باشد' }),
  password: z.string().min(3, { message: 'پسورد ضعیف است' }),
  name: z.string().min(3, { message: 'باید حداقل سه کاراکتر باشد' }),
  lastName: z.string().min(3, { message: 'باید حداقل سه کاراکتر باشد' }),
  email: z
    .string()
    .min(3, { message: 'باید حداقل سه کاراکتر باشد' })
    .email('باید قالب ایمیل وارد کنید'),
});

type FormFace = z.infer<typeof schema>;

function SignupForm() {
  const form = useForm<FormFace>({ resolver: zodResolver(schema) });
  // const [showAlert, setShowAlert] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<FormFace>({} as FormFace);

  const dispatch = useDispatch();
  const userSignup = useUserSignup();
  const navigate = useNavigate();

  const userEmail = useUserEmail();

  // if (userEmail.data?.success === true && showAlert === false) {
  //   setShowAlert(true);
  // }

  // if (userSignup.data?.success) {
  //   dispatch(userAction.login(userSignup.data.data));
  //   navigate('/');
  // }

  useEffect(() => {
    if (userEmail.data?.success === true) {
      dispatch(
        alertAction.showAlert({
          message: 'نام کاربری یا ایمیل شما قبلا استفاده شده است',
          success: false,
          show: true,
        })
      );
    }

    if (
      userEmail.data?.success === false &&
      userSignup.data?.success === undefined
    ) {
      userSignup.mutate(formValue);
    }

    if (userSignup.data?.success) {
      navigate('/');
    }

    return () => {
      if (userSignup.data?.success) {
        dispatch(userAction.login(userSignup.data.data));
        dispatch(
          alertAction.showAlert({
            message: 'ثبت نام با موفقیت انجام شد',
            success: true,
            show: true,
          })
        );
      }
    };
  }, [userEmail.data?.success, userSignup.data?.success]);

  const doSubmit: SubmitHandler<FormFace> = value => {
    // setShowAlert(false);
    userEmail.mutate({ email: value.email });
    setFormValue(value);
  };

  return (
    <>
      {/* {showAlert && (
        <Alert
          message="نام کاربری یا ایمیل شما قبلا استفاده شده است"
          success={false}
        />
      )} */}

      <div className={style.box}>
        <p className={'mb-5 ' + style.header}>ثبت نام</p>

        <form className={style.form} onSubmit={form.handleSubmit(doSubmit)}>
          <div className={style.fullName}>
            <div className={style.formBox}>
              <label htmlFor="name">نام</label>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="نام ..."
                  {...form.register('name')}
                />
                <span>
                  <BsFillPencilFill />
                </span>
              </div>
              {form.formState.errors.name && (
                <p className={style.error}>
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div className={style.formBox}>
              <label htmlFor="lastName">نام خانوادگی</label>
              <div>
                <input
                  type="text"
                  id="lastName"
                  placeholder="نام خانوادگی ..."
                  {...form.register('lastName')}
                />
                <span>
                  <BsFillPencilFill />
                </span>
              </div>
              {form.formState.errors.lastName && (
                <p className={style.error}>
                  {form.formState.errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className={style.formBox}>
            <label htmlFor="userName">نام کاربری</label>
            <div>
              <input
                type="text"
                id="userName"
                placeholder="نام کاربری ..."
                {...form.register('userName')}
              />
              <span>
                <FaUserAlt />
              </span>
            </div>
            {form.formState.errors.userName && (
              <p className={style.error}>
                {form.formState.errors.userName.message}
              </p>
            )}
          </div>

          <div className={style.formBox}>
            <label htmlFor="email">ایمیل</label>
            <div>
              <input
                type="email"
                id="email"
                placeholder="ایمیل ..."
                {...form.register('email')}
              />
              <span>
                <MdEmail />
              </span>
            </div>
            {form.formState.errors.email && (
              <p className={style.error}>
                {form.formState.errors.email.message}
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
      </div>
    </>
  );
}

export default SignupForm;

/*

.refine(async e => {
      

    }, 'ایمیل شما قبلا استفاده شده است'),

*/
