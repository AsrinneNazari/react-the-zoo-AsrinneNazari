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
        localStorage.setItem("animals", JSON.stringify(animals));
      } catch (error) {
        console.error("Fel", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h2>Djuren:</h2>
      <ShowAnimals animals={animalState}></ShowAnimals>
    </>
  );
};
