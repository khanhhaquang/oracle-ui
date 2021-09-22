import React from 'react';
import { useWeb3Context } from 'web3-react';
import useInitMetamask from './hooks/useInitMetamask';
import './Transfer.scss';

const Transfer = () => {
  const { isLoading, error } = useInitMetamask();
  const context = useWeb3Context();

  if (isLoading) return <div className="loading">Loading</div>;
  if (error) return <div className="error">Failed to load {JSON.stringify(error)}</div>;

  return (
    <section className="transfer">
      <h1>Transfer</h1>
      <h4>Account balance: {context.account}</h4>
      <label htmlFor="address">
        Addresses
        <input type="text" id="address" placeholder="address" value="1" />
      </label>
      <label htmlFor="amount">
        Amount
        <input type="number" id="amount" placeholder="amount" value="1" />
      </label>
      <button type="button" onClick={() => console.log(1)}>
        Approve
      </button>
    </section>
  );
};
export default Transfer;
