import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <LoaderContainer>
    <TailSpin
      visible={true}
      height={80}
      width={80}
      ariaLabel="tail-spin-loading"
      color="#85AA9F"
    />
  </LoaderContainer>
);

export default Loader;
