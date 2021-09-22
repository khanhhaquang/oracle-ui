import { useEffect } from 'react';
import { useWeb3Context } from 'web3-react';

const useInitMetamask = () => {
  const context = useWeb3Context();
  const { error } = context;
  const isLoading = !context.active && !context.error;

  useEffect(() => {
    context.setFirstValidConnector(['MetaMask']);
  }, []);

  return { isLoading, error };
};

export default useInitMetamask;
