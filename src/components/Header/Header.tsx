import s from './Header.module.scss';
import { FcTodoList } from 'react-icons/fc';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <div className={s.header__inner}>
        <p className={s.header__title}>
          <FcTodoList className={s.header__icon} size={36} />
          Todo-List
        </p>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
