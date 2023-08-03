import Header from '../../Layout/Header';
import style from './errorPage.module.css';
function ErrorPage() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <p>متاسفانه به خطا برخورد کردید</p>
      </main>
    </>
  );
}

export default ErrorPage;
