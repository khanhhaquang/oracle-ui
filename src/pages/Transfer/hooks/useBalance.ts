import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

const useBalance = () => {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState<string>('');

  const getBalance = () =>
    library.eth
      .getBalance(account)
      .then((result: any) => {
        setBalance(library.utils.fromWei(result, 'ether'));
      })
      .catch(() => {
        setBalance('');
      });

  const watchBalance = () => {
    library.eth.subscribe('newBlockHeaders', (error: any) => {
      if (error) {
        console.log(`Watch error: ${error}`);
      } else {
        getBalance();
      }
    });
  };

  useEffect(() => {
    if (!!account && !!library) {
      getBalance();
      watchBalance();
    }
  }, [account, library]);

  return balance;
};

export default useBalance;
