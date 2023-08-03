import style from './BurgerMenu.module.css';

interface Props {
  showNavSmall: boolean;
  setShowNavSmall: () => void;
}

function BurgerMenu({ showNavSmall, setShowNavSmall }: Props) {
  return (
    <section className={style.burger}>
      <button
        className={
          style.hamburger + (showNavSmall ? ' ' + style['is-active'] : '')
        }
        onClick={setShowNavSmall}
      >
        <section className={style.bar}></section>
      </button>
    </section>
  );
}

export default BurgerMenu;
