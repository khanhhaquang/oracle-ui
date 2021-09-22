import React from 'react';
import { ReactComponent as OracleIcon } from 'pages/Home/imgs/Oracle.svg';

const Title: React.FC = () => (
  <section className="title-wrapper">
    <div className="circle centerize">
      <OracleIcon />
    </div>
    <h1>Oracle</h1>
  </section>
);

export default Title;
