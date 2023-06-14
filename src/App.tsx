import "./App.css";
import IMAGES from "./assets";
import { useState } from "react";
import { Image } from "./Image/Image";
import { Button } from "./buttons/Button";

function App() {
  // You would typically call from a Server to get images but we've mocked that out

  // set default first image to the first image
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [listOfImages] = useState(IMAGES);

  const handleButtonClick = (value: number) => {
    // should check what the value of currentImageIndex is
    if (currentImageIndex >= listOfImages.length - 1 && value === 1) {
      console.log("I shoudl be here");
      setCurrentImageIndex(0);
    } else if (currentImageIndex === 0 && value === -1) {
      setCurrentImageIndex(listOfImages.length - 1);
    } else {
      setCurrentImageIndex((current) => current + value);
    }
  };

  return (
    <>
      <div className="carousel">
        <Button handleButtonClick={handleButtonClick} buttonType={"prev"} />
        <Image image={IMAGES[currentImageIndex]} />
        <Button handleButtonClick={handleButtonClick} buttonType={"next"} />
      </div>
    </>
  );
}

export default App;
