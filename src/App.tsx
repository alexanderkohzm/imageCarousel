import "./App.css";
import IMAGES from "./assets";
import { useState } from "react";
import { Image } from "./Image/Image";
import { PaginationDot } from "./paginationDot/PaginationDot";
import { PrevButton } from "./buttons/PrevButton";
import { NextButton } from "./buttons/NextButton";

function App() {
  // You would typically call from a Server to get images but we've mocked that out

  // set default first image to the first image
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [listOfImages] = useState(IMAGES);

  const handleButtonClick = (value: number) => {
    if (currentImageIndex >= listOfImages.length - 1 && value === 1) {
      setCurrentImageIndex(0);
    } else if (currentImageIndex === 0 && value === -1) {
      setCurrentImageIndex(listOfImages.length - 1);
    } else {
      setCurrentImageIndex((current) => current + value);
    }
  };

  const handlePaginationDotClick = (indexValue: number) => {
    setCurrentImageIndex(indexValue);
  };

  return (
    <>
      <div className="carousel">
        <div className="imageContainer">
          <PrevButton
            handleButtonClick={handleButtonClick}
            buttonType={"prev"}
          />
          <Image image={IMAGES[currentImageIndex]} />
          <div className="paginationDotContainer">
            {listOfImages.map((image, index) => {
              return (
                <PaginationDot
                  handlePaginationDotClick={handlePaginationDotClick}
                  index={index}
                />
              );
            })}
          </div>
          <NextButton
            handleButtonClick={handleButtonClick}
            buttonType={"next"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
