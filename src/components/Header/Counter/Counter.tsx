import { useAppSelector } from '../../../hooks/hooks';
import s from './Counter.module.scss';

const Counter = () => {
  const tasksCount = useAppSelector((state) => state.todos.todos).length;

  return (
    <div className={s.counter}>
      <p className={s.counter__title}>Tasks Count: {tasksCount}</p>
    </div>
  );
};

export default Counter;
