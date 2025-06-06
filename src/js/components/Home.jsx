import React, { useState } from "react";

//create your first component
const Home = () => {
let [trafficLight, setTrafficLight] = useState("red");

let changeLight = (light) => { 
  setTrafficLight(light);
};

  return (
    <>
      <h1 className="my-5">Traffic light</h1>
       <div className="traffic-light">
        <button
          onClick={() => changeLight("red")}
          className={`btn btn-danger${trafficLight === "red" ? " active" : ""}`}
        ></button>
        <button
          onClick={() => changeLight("yellow")}
          className={`btn btn-warning${trafficLight === "yellow" ? " active" : ""}`}
        ></button>
        <button
          onClick={() => changeLight("green")}
          className={`btn btn-success${trafficLight === "green" ? " active" : ""}`}
        ></button>
      </div>
    </>
  );
};

export default Home;
