import { Rings } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Rings height="200" width="200" color="#3f51b5" ariaLabel="loading" />
    </div>
  );
};
export default Loader;
