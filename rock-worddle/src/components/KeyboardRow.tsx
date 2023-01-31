type Props = {
  characters: string;
};

const KeyboardRow = ({ characters }: Props) => {
  return (
    <div className="keyboard-row">
      {characters.split("").map((character) => (
        <button key={character}>{character}</button>
      ))}
    </div>
  );
};

export default KeyboardRow;
