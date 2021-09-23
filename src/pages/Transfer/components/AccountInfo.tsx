import React from 'react';

type TProps = {
  balance: string | null | undefined;
  address: string | null | undefined;
};

const AccountInfo: React.FC<TProps> = ({ balance, address }: TProps) => (
  <>
    <h4>Your balance: {balance ? `${balance} ETH` : '...'}</h4>
    <h4>Your address: {address || 'Error'}</h4>
  </>
);

export default AccountInfo;
