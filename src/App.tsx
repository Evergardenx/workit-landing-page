import React from "react";

import { services } from "./const/services.const";

import {
  FirstSectionComponent,
  SecondSectionComponent,
  ThirdSectionComponent
} from "./components/sections";
import FooterComponent from "./components/footer.component";

function App() {

  return (
    <div className="[ container container--app ]">
      <FirstSectionComponent />
      <SecondSectionComponent services={services} />
      <ThirdSectionComponent />
      <FooterComponent/>
    </div>
  )
}

export default App
