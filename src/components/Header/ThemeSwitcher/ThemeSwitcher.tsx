import s from './ThemeSwitcher.module.scss';
import { BsSunFill, BsSun } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Themes } from '../../../types/types';
import { changeTheme } from '../../../redux/themeSlice';

const ThemeSwitcher: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  const onChangeTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    dispatch(changeTheme(newTheme));
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div className={s.themeSwitcher}>
      {theme === Themes.DARK ? (
        <button className={s.themeSwitcher__btn} onClick={onChangeTheme}>
          <BsSunFill size={30} />
        </button>
      ) : (
        <button className={s.themeSwitcher__btn} onClick={onChangeTheme}>
          <BsSun size={30} />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
