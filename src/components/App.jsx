import React from "react";
import Card from "./Card";
import Emojipedia from "../emojipedia";

function createCard(emojipediaa) {
  return (
    <Card
      key={emojipediaa.id}
      emoji={emojipediaa.emoji}
      name={emojipediaa.name}
      meaning={emojipediaa.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
