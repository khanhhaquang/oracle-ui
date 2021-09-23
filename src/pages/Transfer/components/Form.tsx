import { useState } from 'react';
import clxs from 'classnames';
import { useWeb3React } from '@web3-react/core';
import { checkMultiAddresses } from '../helpers';

type TProps = {
  sendTransaction: (payload: { amount: string; to: string | string[] }) => void;
  isSubmitting: boolean;
};

const Form: React.FC<TProps> = ({ sendTransaction, isSubmitting }: TProps) => {
  const { library } = useWeb3React();
  const [amount, setAmount] = useState<string>('');
  const [amountError, setAmountError] = useState<string>('');
  const [recipient, setRecipient] = useState<string>('');
  const [recipientError, setRecipientError] = useState<string>('');

  const handleRecipientChange = (e: { target: HTMLInputElement }) => {
    setRecipientError('');
    setRecipient(e.target.value);
  };

  const handleAmountChange = (e: { target: HTMLInputElement }) => {
    setAmountError('');
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    if (!recipient) return setRecipientError('Invalid recipient');
    if (!checkMultiAddresses(recipient)) {
      if (!library.utils.isAddress(recipient)) return setRecipientError('Invalid address');
    } else {
      sendTransaction({ amount, to: recipient.split(',') });
      return;
    }

    if (!amount) return setAmountError('Invalid amount');

    sendTransaction({ amount, to: recipient });
  };

  return (
    <form>
      <label htmlFor="address">
        Addresses
        <input
          multiple
          type="text"
          id="address"
          placeholder="Recipient address"
          value={recipient}
          onChange={handleRecipientChange}
        />
        {recipientError && <span className="error-txt">{recipientError}</span>}
      </label>
      <label htmlFor="amount">
        Amount
        <input
          type="number"
          id="amount"
          maxLength={50}
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
        />
        {amountError && <span className="error-txt">{amountError}</span>}
      </label>
      <button
        type="button"
        className={clxs('button', { loading: isSubmitting })}
        onClick={handleSubmit}>
        {isSubmitting ? 'Loading' : 'Approve'}
      </button>
    </form>
  );
};

export default Form;
