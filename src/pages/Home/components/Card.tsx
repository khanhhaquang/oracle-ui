import React from 'react';
import clxs from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS_CLASSES, STATUS_TEXTS } from '../constants';
import CardLogo from './CardLogo';
import CardInfo from './CardInfo';
import CardStatus from './CardStatus';
import { selectToken } from '../store/actions';
import { getSelectedToken } from '../store/reducer';

type TProps = {
  id: number;
  name: string;
  logo: string;
  status: number;
  price: number;
  expiryDate: number;
};

const Card: React.FC<TProps> = ({ id, name, logo, status, price, expiryDate }: TProps) => {
  const dispatch = useDispatch();
  const selectedId = useSelector(getSelectedToken);
  const statusClass = STATUS_CLASSES[status];
  const statusText = STATUS_TEXTS[status];

  const handleClick = () => dispatch(selectToken(id));

  return (
    <div className={clxs('card-wrapper grid-item', { selected: selectedId === id })}>
      <button type="button" className="card-cover" onClick={handleClick} aria-label="none" />
      <h3 className="card-title">{name.toUpperCase()}</h3>
      <div className="card-body">
        <CardLogo src={logo} />
        <CardInfo price={price} expiryDate={expiryDate} />
        <CardStatus statusClass={statusClass} statusText={statusText} />
      </div>
    </div>
  );
};

export default Card;
