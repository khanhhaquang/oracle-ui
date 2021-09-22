import React from 'react';
import CardLogo from './CardLogo';

const Loading: React.FC = () => (
  <>
    {[...new Array(4)].map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} className="card-wrapper grid-item loading">
        <div className="card-title" />
        <div className="card-body">
          <CardLogo src="" />
          <div className="card-info">
            <div id="price" />
            <div id="expiry-date" />
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Loading;
