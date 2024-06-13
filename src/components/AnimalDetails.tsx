import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IShowAnimalDetailProps {
  animal: IAnimal;
}

export const AnimalDetails = ({ animal }: IShowAnimalDetailProps) => {
  return (
    <>
      <Link to={"/animals"}>Tillbaka</Link>
      <h3>{animal.name}</h3>
      <h4>{animal.latinName}</h4>
      <img src={animal.imageUrl} alt={animal.latinName} />
      <p>{animal.longDescription}</p>
      <p>{animal.isFed}</p>
      <p>{animal.lastFed}</p>
      <button>Mata mig!</button> //gör en egen komponent!?
    </>
  );
};
