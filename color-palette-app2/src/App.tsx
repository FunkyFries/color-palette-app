import React from "react";
import Palette from "./components/Palette";
import seedPalettes from "./components/seedPalettes";
import { generatePalette } from "./components/colorHelpers";

const App: React.FC = () => {
  console.log(generatePalette(seedPalettes[4]));
  return (
    <div className="App">
      <Palette {...seedPalettes[3]} />
    </div>
  );
};

export default App;
