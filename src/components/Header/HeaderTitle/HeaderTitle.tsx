import s from './HeaderTitle.module.scss';
import { useAppSelector } from '../../../hooks/hooks';
import { Themes } from '../../../types/types';
import { RiTodoFill, RiTodoLine } from 'react-icons/ri';

type HeaderTitleProps = {
  children: React.ReactNode;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <p className={s.headerTitle}>
      {theme === Themes.LIGHT ? (
        <RiTodoFill className={s.headerTitle__icon} size={36} />
      ) : (
        <RiTodoLine className={s.headerTitle__icon} size={36} />
      )}
      {children}
    </p>
  );
};

export default HeaderTitle;
