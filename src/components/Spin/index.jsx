import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const Spin = () => {
  const spinner = useSelector((state) => state.appReducer.loading);
  return (
    <div className="loader-styles">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} visible={spinner} />
    </div>
  );
};

export default Spin;
