import React, { useState } from "react";
import Picture from "./Picture";

function App() {
  const [pictures, setPictures] = useState([]);

  const handleClick = () => {
    const timestamp = new Date().getTime();
    const newPicture = [
      ...pictures,
      {
        id: crypto.randomUUID(),
        url: `https://picsum.photos/100/100?random=${timestamp}`,
        emoji: "👍"
      }
    ];
    setPictures(newPicture);
  };

  return (
    <div>
      <button onClick={handleClick} style={{ marginBottom: "2rem" }}>
        Add Picture
      </button>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {pictures.map((picture) => (
          <div className="container" key={picture.id}>
            {" "}
            <Picture picture={picture} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
