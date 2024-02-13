import React from 'react';
import logo from '/assets/images/logo-light.svg';

const ToolbarComponent = () => {
  return (
    <div className="[ topbar ]">
      <img className="[ topbar--logo ]" src={logo} alt="Logo"/>
      <a href="#" className="[ body-large ] [ btn ] [ btn--text ]">
        Apply for access
      </a>
    </div>
  );
};

export default ToolbarComponent;
