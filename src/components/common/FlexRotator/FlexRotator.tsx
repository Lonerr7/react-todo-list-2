import s from './FlexRotator.module.scss';

type FlexRotatorProps = {
  direction: 'row' | 'column';
  children: JSX.Element | JSX.Element[];
};

const FlexRotator: React.FC<FlexRotatorProps> = ({ direction, children }) => {
  return (
    <div className={s.flexRotator} style={{ flexDirection: direction }}>
      {children}
    </div>
  );
};

export default FlexRotator;
