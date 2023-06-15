type HandleButtonClickType = (number: number) => void;

export const NextButton = ({
  handleButtonClick,
  buttonType,
}: {
  handleButtonClick: HandleButtonClickType;
  buttonType: string;
}): JSX.Element => {
  return (
    <button className="nextButton" onClick={() => handleButtonClick(1)}>
      {buttonType}
    </button>
  );
};
