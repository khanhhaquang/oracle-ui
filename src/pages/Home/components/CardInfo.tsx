import React from 'react';
import format from 'date-fns/format';
import { formatNumber } from '../helpers';

type TProps = {
  price: number;
  expiryDate: number;
};

const CardInfo: React.FC<TProps> = ({ price, expiryDate }: TProps) => (
  <div className="card-info">
    <span id="price">$ {formatNumber(price)}</span>
    <span id="expiry-date">End: {format(new Date(expiryDate), 'dd/MMM/yyyy HH:mm')}</span>
  </div>
);

export default CardInfo;
