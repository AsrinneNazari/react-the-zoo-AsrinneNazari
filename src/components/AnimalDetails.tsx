import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import "./../styles/AnimalDetails.scss";
import { FeedAnimal } from "./FeedAnimal";

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
          <br />
          <h5>Senast åt jag:</h5>
          <p>{animal.lastFed}</p>
          <FeedAnimal />
        </div>
      </div>
    </>
  );
};
