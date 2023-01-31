import KeyboardRow from "./components/KeyboardRow";
import WordRow from "./components/WordRow";
import { Board } from "./ui/GameBoard";

function App() {
  return (
    <main className="App">
      <h1>Rock the Wordle</h1>
      <Board id="board">
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
      </Board>
      <section id="keyboard">
        <KeyboardRow characters={"abcdefghi"} />
        <KeyboardRow characters={"jklmnñopq"} />
        <KeyboardRow characters={"rstuvwxyz"} />
      </section>
    </main>
  );
}

export default App;
