import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import "./../styles/AnimalDetails.scss"

interface IShowAnimalDetailProps {
  animal: IAnimal;
}

export const AnimalDetails = ({ animal }: IShowAnimalDetailProps) => {
  return (
    <>
    <div className="main-detail-container">
    <div className="detail-container">
      <Link to={"/animals"}>Tillbaka</Link>
      <h3>{animal.name}</h3>
      <h4>{animal.latinName}</h4>
      <img src={animal.imageUrl} alt={animal.latinName} />
      <p>{animal.longDescription}</p>
      <p>{animal.isFed}</p>
      <br/>
      <p>{animal.lastFed}</p>
      <button>Mata mig!</button> 
      </div>
      </div>
    </>
  );
};
