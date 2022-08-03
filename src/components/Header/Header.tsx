import s from './Header.module.scss';

import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import Counter from './Counter/Counter';
import HeaderTitle from './HeaderTitle/HeaderTitle';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__top}>
          <HeaderTitle>Todo-List</HeaderTitle>
          <ThemeSwitcher />
        </div>
        <Counter />
      </div>
    </header>
  );
};

export default Header;
