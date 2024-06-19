import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import { ShowAnimals } from "../components/ShowAnimals";

export const Animals = () => {
  const LSanimalList:IAnimal[] = JSON.parse(localStorage.getItem("animals")|| "[]" ) 
  const [animalState, setAnimalState] = useState<IAnimal[]>(LSanimalList);
  useEffect(() => {
    if (animalState.length > 0) {
      return;
    }
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
  localStorage.setItem("animals", JSON.stringify(animalState));

  return (
    <>
      <ShowAnimals animals={animalState}></ShowAnimals>
    </>
  );
};
