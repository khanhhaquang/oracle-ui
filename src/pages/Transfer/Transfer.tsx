import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import useInitMetamask from './hooks/useInitMetamask';
import useBalance from './hooks/useBalance';
import { AccountInfo, Form } from './components';
import './Transfer.scss';

const Transfer = () => {
  useInitMetamask();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const { account, library } = useWeb3React();
  const balance = useBalance();
  const showForm = !!account && !!balance;

  const sendSingleTransaction = (to: string, value: string) =>
    library.eth.sendTransaction({ from: account, to, value }, (error: any) => {
      setSubmitting(false);
      if (error) {
        alert(error.message);
        return;
      }
      alert('Transfer successfully');
    });

  const handleSubmitTransaction = (payload: { amount: string; to: string | string[] }) => {
    setSubmitting(true);
    const { amount, to } = payload;
    const value = library.utils.toWei(amount, 'ether');

    if (typeof to !== 'string') {
      let counter = 0;
      const batch = new library.eth.BatchRequest();
      to.forEach((address) => {
        batch.add(
          library.eth.sendTransaction.request(
            { from: account, to: address, value },
            (error: any) => {
              counter += 1;
              if (counter === to.length) {
                console.log('🚀 ~ file: Transfer.tsx ~ line 39 ~ to.forEach ~ counter', counter);
                setSubmitting(false);
              }
              if (error) {
                alert(`to ${address} ${error.message}`);
              } else {
                alert(`Transfer successfully to ${address}`);
              }
            },
          ),
        );
      });
      batch.execute();
    } else {
      sendSingleTransaction(to, value);
    }
  };

  return (
    <section className="transfer">
      <h1>Transfer</h1>
      <AccountInfo balance={balance} address={account} />
      {showForm && <Form isSubmitting={isSubmitting} sendTransaction={handleSubmitTransaction} />}
    </section>
  );
};
export default Transfer;
