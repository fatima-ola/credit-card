import React from "react";
import {cardInfo} from "./data"
import CreditCard from "./components/CreditCard";
import "./index.css";

const App = () => {
  return <CreditCard cardInfo={cardInfo} />;
};

export default App;
