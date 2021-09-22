import React from 'react';

type TProps = {
  src: string;
};

const CardLogo: React.FC<TProps> = ({ src }: TProps) => (
  <div className="card-logo centerize circle">
    <div className="inner centerize circle">
      <div className="inner-inner centerize circle">{src && <img alt="logo" src={src} />}</div>
    </div>
  </div>
);

export default CardLogo;
