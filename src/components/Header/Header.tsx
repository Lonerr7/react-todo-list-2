import s from './Header.module.scss';
import { RiTodoFill, RiTodoLine } from 'react-icons/ri';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import Counter from './Counter/Counter';
import { useAppSelector } from '../../hooks/hooks';
import { Themes } from '../../types/types';

const Header: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <div className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__top}>
          <p className={s.header__title}>
            {theme === Themes.LIGHT ? (
              <RiTodoFill className={s.header__icon} size={36} />
            ) : (
              <RiTodoLine className={s.header__icon} size={36} />
            )}
            Todo-List
          </p>
          <ThemeSwitcher />
        </div>
        <Counter />
      </div>
    </div>
  );
};

export default Header;
