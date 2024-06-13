import { useEffect, useState } from "react";
import { getAnimals } from "../services/animalService";
import { IAnimal } from "../models/IAnimal";

export const AnimalApp = () => {
  const [state, setState] = useState<IAnimal[]>();

  useEffect(() => {
    if (!state) getData();
  });

  const getData = async () => {
    const animals = await getAnimals();
    setState(animals);
    console.log(animals); //funkar!
  };
  return <>
  
  </>;
};
