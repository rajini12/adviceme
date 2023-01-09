/* eslint-disable no-sequences */
import React from "react";
import { useState, useEffect } from "react";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

import "./App.css";

const App = (props) => {
  const [text, setText] = useState({
    id: "117",
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });
  const fetchAdvice = async () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.background =
      "rgb(" + red + ", " + green + ", " + blue + ")";

    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    setText(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      {/* <h1>Hi rajini welcome to this world</h1>
    <h1> advice {text.id}</h1> */}
      <h1>Advice #{text.id}</h1>

      <p>{text.advice}</p>

      <picture>
        <source media="(min-width:768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>

      <div>
        <button onClick={fetchAdvice}>
          <img src={dice} alt="" />
        </button>
      </div>

      {/* <button onClick={fetchAdvice}>click here</button> */}
    </div>
  );
};

export default App;
