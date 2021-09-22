import React from 'react';
import clxs from 'classnames';
import { ReactComponent as StatusCircleIcon } from '../imgs/StatusCircle.svg';

type TProps = {
  statusText: string;
  statusClass: string;
};

const CardStatus: React.FC<TProps> = ({ statusText, statusClass }: TProps) => (
  <div className={clxs('card-status', statusClass)}>
    <StatusCircleIcon />
    {statusText}
  </div>
);

export default CardStatus;
