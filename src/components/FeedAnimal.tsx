import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

interface IFeedAnimalprops {
  animal:IAnimal;
  lastFed: string; //hjälp..
}

export const FeedAnimal = ({animal, lastFed}: IFeedAnimalprops) => {
  const [feed, setFeed] = useState(null);
  const [LSanimal, setLSanimal] = useState();
  useEffect(() => {
    const storedAnimal = localStorage.getItem("animals");
    if(storedAnimal){
      setLSanimal(storedAnimal);
    }
  }, []);
  console.log(LSanimal); //funkar!
  const handleFeed = () =>{
    const newFeedTime = new Date().toString();
    localStorage.setItem("lastfed", newFeedTime)
    setFeed(newFeedTime);
  }

  return (
    <>
    <h5>Jag åt senast:</h5>
    <p>{feed}</p>
      <button onClick={handleFeed}>Mata mig!</button>
    </>
  );
};
