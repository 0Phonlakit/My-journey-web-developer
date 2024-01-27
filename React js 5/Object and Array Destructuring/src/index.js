import React from "react";
import ReactDOM from "react-dom";
// import animals from "./data";

// const [cat, dog] = animals;

// const {name, sound} = cat;

import cars from "./practice";

// CHALLENGE: uncomment the code below and see the car stats rendered

const [honda, tesla] = cars;

const {speedStats: { topSpeed: teslaTopSpeed }, coloursByPopularity: [teslaTopColour] } = tesla;
const {speedStats: { topSpeed: hondaTopSpeed }, coloursByPopularity: [hondaTopColour] } = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
