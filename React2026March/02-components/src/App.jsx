import React from "react";
import Card from "./Components/Card";
import Nacbar from "./Components/Nacbar";

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Ashwin</h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          amet illo accusamus quam, aliquam ipsa temporibus eaque vel quisquam
          eos debitis ex ad, velit tenetur porro, itaque aliquid iste iure.
        </p>
      </div>

      <div className="card">
        <h1>Ashwin</h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          amet illo accusamus quam, aliquam ipsa temporibus eaque vel quisquam
          eos debitis ex ad, velit tenetur porro, itaque aliquid iste iure.
        </p>
      </div>

      <Card />
      <Nacbar />
    </div>
  );
};

export default App;
