
import React from 'react';

function Header(props) {
  const { title = 'Default Title', subtitle = 'Default Subtitle' } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default Header;
