import { useAppSelector } from '../../../hooks/hooks';
import ErrorPopup from './ErrorPopup';
import s from './ErrorPopups.module.scss';

const ErrorPopups: React.FC = () => {
  const errors = useAppSelector((state) => state.error.errors);

  const errorElems = errors.map((err) => (
    <ErrorPopup key={err.id} errMessage={err.errMessage} id={err.id} />
  ));

  return <ul className={s.errorPopups}>{errorElems}</ul>;
};

export default ErrorPopups;
