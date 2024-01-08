import React from "react";
import Navigation from "./conponents/Navigation/Navigation";
import ContactHeader from "./conponents/ContactHeader/ContactHeader";
import ContactForm from "./conponents/ContactForm/ContactFrom";

const App = () => {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default App;
