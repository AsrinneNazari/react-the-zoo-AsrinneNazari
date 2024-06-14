import { IAnimal } from "../models/IAnimal";
import { ShowAnimal } from "./ShowAnimal";

interface IAnimalProps {
  animals: IAnimal[];
}
export const ShowAnimals = ({ animals }: IAnimalProps) => {
  return (
    <>
      {animals.map((animal) => {
        return <ShowAnimal key={animal.id} animal={animal}></ShowAnimal>;
      })}
    </>
  );
};
