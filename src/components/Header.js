
import React, { Fragment } from 'react';

const Header = ({ title, sub }) => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="content">
            <h1 className="title">{title}</h1>
            <p className="text">{sub}</p>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;