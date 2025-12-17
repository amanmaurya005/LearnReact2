import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


export default function CheckBox() {
  const [leftItems, setLeftItems] = useState([
    "Lorem, ipsum dolor 1",
    "Lorem, ipsum dolor 2",
    "Lorem, ipsum dolor 3",
    "Lorem, ipsum dolor 4",
  ]);

  const [rightItems, setRightItems] = useState([]);

  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  // handle checkbox selection
  const toggleLeft = (item) => {
    setSelectedLeft((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const toggleRight = (item) => {
    setSelectedRight((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  // move left → right
  const moveRight = () => {
    setRightItems([...rightItems, ...selectedLeft]);
    setLeftItems(leftItems.filter((item) => !selectedLeft.includes(item)));
    setSelectedLeft([]);
  };

  // move right → left
  const moveLeft = () => {
    setLeftItems([...leftItems, ...selectedRight]);
    setRightItems(rightItems.filter((item) => !selectedRight.includes(item)));
    setSelectedRight([]);
  };

  return (
    <div className="flex gap-6 p-6 w-full bg-blue-100">

      {/* First Box */}
      <div className="firstBox border p-4 w-1/3">
        {leftItems.map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              checked={selectedLeft.includes(item)}
              onChange={() => toggleLeft(item)}
            />
            <span className="ml-2">{item}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="buttons flex flex-col gap-4 justify-center">
        <button
          onClick={moveRight}
          className="p-2 bg-white border rounded"
        >
          <FaArrowRight />
        </button>

        <button
          onClick={moveLeft}
          className="p-2 bg-white border rounded"
        >
          <FaArrowLeft />
        </button>
      </div>

      {/* Second Box */}
      <div className="secondBox border p-4 w-1/3">
        {rightItems.map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              checked={selectedRight.includes(item)}
              onChange={() => toggleRight(item)}
            />
            <span className="ml-2">{item}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
