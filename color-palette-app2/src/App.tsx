import React from "react";
import Palette from "./components/Palette";
import seedPalettes from "./components/seedPalettes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Palette {...seedPalettes[4]} />
    </div>
  );
};

export default App;
