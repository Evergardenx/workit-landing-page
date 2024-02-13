import React from 'react';
import {Service} from "../../interfaces/services.interface";

interface SecondSectionComponentProps {
  services: Service[];
}

export const SecondSectionComponent = ({ services }:SecondSectionComponentProps) => {
  return (
    <section className="[ section--two ] [ tertiary-container ] [ on-background-text ]">

      <div className="[ services ] [  container--content--padding ]">
        { services.map( (service, index) => (
          <div key={index} className="[ card ] [ service ] [ body-large ]">
            <p className="[ service--number ] [ label-large ]">{ index + 1 }</p>
            <div className="[ service--content ]">
              <h2 className="[ headline-small ]">{ service.title }</h2>
              <p>{ service.description }</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SecondSectionComponent;
