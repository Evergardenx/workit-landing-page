import React from 'react';
import profileImage from '/assets/images/image-founder.webp';

export const ThirdSectionComponent = () => {
  return (
    <section className="[ section--three ] [ on-background-text ]">
      <img className="[ image--profile ]" src={profileImage} alt="Profile Image"/>
      <div className="[ contact ] [ on-primary-container ] [ background-text ]">
        <h2 className="[ display-small ]">Be the first to test</h2>
        <p className="[ body-large ]">
          Hi, I'm Louis Graham, the founder of the company.
          Book a demo call with me to become a beta tester for our app and kickstart your company.
          Apply for access below and I’ll be in touch to schedule a call.
        </p>
        <button className="[ btn btn--fill ] [ body-large ]">
          Apply for access
        </button>
      </div>
    </section>
  );
};

export default ThirdSectionComponent;
