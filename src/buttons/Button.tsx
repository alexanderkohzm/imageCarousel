import { Dispatch, SetStateAction } from "react";

export const Button = ({
  handleButtonClick,
  buttonType,
}: {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleButtonClick: Function;
  buttonType: string;
}): JSX.Element => {
  // need to have type of button (e.g. prev, next)
  const nextOrPrev = buttonType === "next" ? 1 : -1;

  return (
    <button onClick={() => handleButtonClick(nextOrPrev)}>{buttonType}</button>
  );
};
