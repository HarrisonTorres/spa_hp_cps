import { useState, useEffect } from "react";

import { Card } from "../../component/Card/Card";
import { data } from "../../Mocks/data";

import "./home.css";

export function Home() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    setCharacters(data)
  }, [])

  return (
    <>
      <section className="cards-home">
        {characters.map((char) => {
          return (
            <Card
              key={"char_${char.id}"}
              name={char.name}
              house={char.house}
              image={char.image}
              actor={char.actor}
            />
          );
        })}
      </section>
    </>
  );
}
