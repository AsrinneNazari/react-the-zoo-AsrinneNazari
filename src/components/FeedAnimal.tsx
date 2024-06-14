import { useState } from "react";

interface IFeedAnimal {
}


export const FeedAnimal = () => {
    const[feed, setFeed]=useState();
    
  return (
    <>
      <button>Mata mig!</button>
    </>
  );
};
