import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from 'connectors';

const useInitMetamask = () => {
  const { activate } = useWeb3React();

  useEffect(() => {
    activate(injectedConnector);
  }, []);
};

export default useInitMetamask;
