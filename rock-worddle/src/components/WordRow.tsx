import { BoardCell } from "../ui/GameBoard";

type Props = {
  isActive: boolean;
  guess: string;
  previousGuess?: string;
  word: string;
};

const WordRow = ({ isActive, guess, word, previousGuess }: Props) => {
  const wordToShow = isActive ? guess : previousGuess;
  return (
    <>
      {[0, 1, 2, 3, 4].map((cell) => (
        <BoardCell
          key={cell}
          isActive={isActive}
          isGreen={word[cell] === previousGuess?.[cell]}
          isYellow={
            previousGuess ? word.includes(previousGuess?.[cell]) : false
          }
        >
          {wordToShow?.[cell] ?? ""}
        </BoardCell>
      ))}

      {/* <BoardCell isActive={isActive}>{wordToShow?.[1]}</BoardCell>
      <BoardCell isActive={isActive}>{wordToShow?.[2]}</BoardCell>
      <BoardCell isActive={isActive}>{wordToShow?.[3]}</BoardCell>
      <BoardCell isActive={isActive}>{wordToShow?.[4]}</BoardCell> */}
    </>
  );
};

export default WordRow;
