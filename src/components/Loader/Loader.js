import { Oval } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <Oval
        height={120}
        width={120}
        color="#686868"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#DBDBDB"
      />
    </Backdrop>
  );
};
