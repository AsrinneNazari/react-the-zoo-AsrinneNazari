import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import { ShowAnimals } from "../components/ShowAnimals";

export const Animals = () => {
  const [animalState, setAnimalState] = useState<IAnimal[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const animals = await getAnimals();
        setAnimalState(animals);
      } catch (error) {
        console.error("Fel", error);
      }
    };
    getData();
  }, [animalState]);

  return (
    <>
      <ShowAnimals animals={animalState}></ShowAnimals>
    </>
  );
};

//detaljsidan eller första sidan
// på båda ställen, koll i loopen, jämföra nutid med dåtid
