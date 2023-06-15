type HandleButtonClickType = (number: number) => void;

export const PrevButton = ({
  handleButtonClick,
  buttonType,
}: {
  handleButtonClick: HandleButtonClickType;
  buttonType: string;
}): JSX.Element => {
  return (
    <button className="prevButton" onClick={() => handleButtonClick(-1)}>
      {buttonType}
    </button>
  );
};
