import { useEffect, useState } from "react";
import ColorBox2 from "./ColorBox2";

const bg = ["red", "green", "blue", "yellow", "orange", "purple"];

function App() {

    const [randomBg, setRandomBg] = useState([]);

    //  added
    const [revealed, setRevealed] = useState([]);
    const [matched, setMatched] = useState([]);
    const [selected, setSelected] = useState([]);

    let temp = []
    let temp2 = []

    useEffect(() => {
        for (let i = 0; i < bg.length; i++) {
            const randomValue = getRandomValue();
            if (temp.includes(randomValue)) {
                i--;
            } else {
                temp.push(randomValue)
            }
        }

        for (let i = 0; i < bg.length; i++) {
            const randomValue = getRandomValue();
            if (temp2.includes(randomValue)) {
                i--;
            }
            else {
                temp2.push(randomValue)
            }
        }

        setRandomBg([...temp, ...temp2])

    }, [])

    function getRandomValue() {
        const randomIndex = Math.floor(Math.random() * bg.length);
        return randomIndex;
    }

    //  ADD THIS FUNCTION (NO CHANGES TO YOUR JSX)
    function handleBoxClick(index) {
        if (revealed.includes(index) || matched.includes(index)) return;

        const newSelected = [...selected, index];

        setRevealed([...revealed, index]);
        setSelected(newSelected);

        if (newSelected.length === 2) {
            const first = newSelected[0];
            const second = newSelected[1];

            const firstColor = bg[randomBg[first]];
            const secondColor = bg[randomBg[second]];

            if (firstColor === secondColor) {
                setMatched([...matched, first, second]);
                setSelected([]);
            } else {
                // hide after delay
                setTimeout(() => {
                    setRevealed(prev =>
                        prev.filter(i => i !== first && i !== second)
                    );
                }, 700);
                setSelected([]);
            }
        }
    }

    return (
       <div className="pt-4 w-full min-h-screen bg-[#0d0d16] text-white">
  <h1 className="text-3xl font-bold mt-6 text-center tracking-wide drop-shadow-lg">
    Flip Card
  </h1>

  <div
    className="
      boxes 
      p-6 
      gap-6 
      grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-6 
      xl:grid-cols-6 
      place-items-center
      max-w-[1300px]
      mx-auto
    "
  >
    {randomBg.map((obj, index) => (
      <ColorBox2 
         key={index} 
         bg={bg[obj]}
         
         //  ADDED props (NO other changes)
         isRevealed={revealed.includes(index) || matched.includes(index)}
         onClick={() => handleBoxClick(index)}
      />
    ))}
  </div>
</div>

    )
}

export default App;
