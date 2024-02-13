import React from 'react';
import logo from '/assets/images/logo-dark.svg';
export const FooterComponent = () => {
  const socialMedia: string[] = [ '/assets/images/icon-facebook.svg', '/assets/images/icon-instagram.svg', '/assets/images/icon-twitter.svg' ];
  return (
    <footer className="[ footer ]">
      <img src={logo} alt="Logo" className="[ topbar--logo ]"/>
      <ul className="[ footer--social-media ]">
        {socialMedia.map((social, index) => (
          <li className="[ item ]" key={index}>
            <img src={social} alt="Social Media" />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterComponent;
