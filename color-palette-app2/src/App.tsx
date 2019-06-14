import React from "react";
import Palette from "./components/Palette";
import seedPalettes from "./components/seedPalettes";
import { generatePalette } from "./components/colorHelpers";

const App: React.FC = () => {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedPalettes[4])} />
    </div>
  );
};

export default App;
