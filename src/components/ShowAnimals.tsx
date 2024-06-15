import { IAnimal } from "../models/IAnimal";
import { ShowAnimal } from "./ShowAnimal";

interface IAnimalProps {
  animals: IAnimal[];
}
export const ShowAnimals = ({ animals }: IAnimalProps) => {
  return (
    <>
    <div className="animal-container">
      {animals.map((animal) => {
        return <ShowAnimal key={animal.id} animal={animal}></ShowAnimal>;
      })}
      </div>
    </>
  );
};
