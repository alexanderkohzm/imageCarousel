type HandlePaginationDotType = (index: number) => void;

export const PaginationDot = ({
  index,
  handlePaginationDotClick,
}: {
  index: number;
  handlePaginationDotClick: HandlePaginationDotType;
}): JSX.Element => {
  return (
    <button
      className="paginationDot"
      onClick={() => handlePaginationDotClick(index)}
    ></button>
  );
};
