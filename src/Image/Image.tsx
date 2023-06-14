export const Image = ({ image }: { image: string }): JSX.Element => {
  return (
    <div className="imageContainer">
      <img className="image" src={image}></img>
    </div>
  );
};
