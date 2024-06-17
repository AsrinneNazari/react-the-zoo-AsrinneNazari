import { useState } from "react";
import { IAnimal } from "../models/IAnimal";

interface IFeedAnimalprops {
  animal: IAnimal;
  onFeed: (newFeedTime: string) => void;
}

export const FeedAnimal = ({ animal, onFeed }: IFeedAnimalprops) => {
  const [feed, setFeed] = useState<string | null>(animal.lastFed);
  const [isFed, setIsFed] = useState<boolean>(animal.isFed);

  const handleFeed = () => {
    const newFeedTime = new Date().toString();
    const getLSanimals: IAnimal[] = JSON.parse(
      localStorage.getItem("animals") || "[]"
    );
    const findAnimal = getLSanimals.findIndex(
      (i: IAnimal) => i.id === animal.id
    );

    if (findAnimal !== -1) {
      const updateAnimalFeed = {
        ...getLSanimals[findAnimal],
        lastFed: newFeedTime,
        isFed: true,
      };
      getLSanimals[findAnimal] = updateAnimalFeed;

      localStorage.setItem("animals", JSON.stringify(getLSanimals));
      setFeed(newFeedTime);
      setIsFed(true);
      onFeed(newFeedTime);
    }
  };

  return (
    <>
      <h5>Jag åt senast:</h5>
      <button onClick={handleFeed} disabled={isFed}>
        Mata mig!
      </button>
      <p>{feed}</p>
    </>
  );
};