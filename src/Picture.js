import { useState } from "react";

export default function Picture({ picture }) {
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState(`1rem`);
  const handleSize = () => {
    setNumber((pre) => pre + 1);
    setSize(`${number}rem`);
  };

  return (
    <div className="picture" style={{ marginBottom: "4rem" }}>
      <img src={picture.url} onClick={handleSize} />
      <p style={{ fontSize: `${size}` }}>{picture.emoji}</p>
    </div>
  );
}
