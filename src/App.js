import React from "react";
import CreditCard from "./components/CreditCard";
import "./index.css";

const App = () => {
  const cardInfo = {
    personName: "Fatima Olasunkanmi-Ojo",
    expiryDate: "08/19",
    creditCardNumber: "1234 5678 8765 4321",
    bankName: "Big Bank, Inc.",
  };
  return <CreditCard cardInfo={cardInfo} />;
};

export default App;
