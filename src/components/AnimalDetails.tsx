import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import "./../styles/AnimalDetails.scss";
import { FeedAnimal } from "./FeedAnimal";
import { useState } from "react";

interface IShowAnimalDetailProps {
  animal: IAnimal;
}

export const AnimalDetails = ({ animal }: IShowAnimalDetailProps) => {
  const [currentAnimal, setCurrentAnimal] = useState<IAnimal>(animal);
  const newFeedUpdate = (newFeedTime: string) => {
    setCurrentAnimal({ ...currentAnimal, lastFed: newFeedTime, isFed: true });
  };
  return (
    <>
      <div className="main-detail-container">
        <div className="detail-container">
          <div className="link-container">
            <Link to={"/animals"}>Tillbaka</Link>
          </div>
          <h3>{animal.name}</h3>
          <h4>{animal.latinName}</h4>
          <img src={animal.imageUrl} alt={animal.latinName} onError={(e) => {
   ( e.target as  HTMLImageElement).src="/public/img/hästfärs.webp";
  }} />
          <p>{animal.longDescription}</p>
         
          <br />
          <FeedAnimal animal={currentAnimal} onFeed={newFeedUpdate} />
        </div>
      </div>
    </>
  );
};
