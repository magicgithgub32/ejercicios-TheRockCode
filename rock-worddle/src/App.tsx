import KeyboardRow from "./components/KeyboardRow";
import WordRow from "./components/WordRow";
import { Board } from "./ui/GameBoard";
import { Keyboard } from "./ui/Keyboard";
import { useState, useEffect, useRef } from "react";
import { getRandomBetween } from "./utils/numbers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const words = [
  "plata",
  "hielo",
  "suelo",
  "cielo",
  "verde",
  "patio",
  "radio",
  "sanar",
];

function App() {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const previousGuesses = useRef<string[]>([]);

  useEffect(() => {
    const randomIndex = getRandomBetween(0, words.length - 1);
    const randomWord = words[randomIndex];
    setWord(randomWord);
  }, []);

  const addLetterToGuess = (letter: string) => {
    if (guess.length < 5) {
      setGuess(guess + letter);
    }
  };

  useEffect(() => {
    if (guess.length === 5) {
      if (guess === word) {
        toast.success("🦄 You are the master of words!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        previousGuesses.current.push(guess);
        setActiveRow(activeRow + 1);
        setGuess("");
      }
    }
  }, [guess]);

  useEffect(() => {
    if (activeRow === 6) {
      toast.error("💀 You lost! Refresh if you wanna try again", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [activeRow]);

  console.log("Palabra por adivinar:", word);
  console.log("Palabra que el usuario adivina:", guess);
  console.log("Adivinanzas previas:", previousGuesses.current);

  return (
    <main className="App">
      <h1>Rock the Wordle</h1>

      <Board id="board">
        {[0, 1, 2, 3, 4, 5].map((row) => (
          <WordRow
            key={row}
            word={word}
            guess={guess}
            isActive={activeRow === row}
            previousGuess={previousGuesses.current[row]}
          />
        ))}
      </Board>

      <Keyboard id="keyboard">
        <KeyboardRow
          onClickLetter={addLetterToGuess}
          characters={"abcdefghi"}
        />
        <KeyboardRow
          onClickLetter={addLetterToGuess}
          characters={"jklmnñopq"}
        />
        <KeyboardRow
          onClickLetter={addLetterToGuess}
          characters={"rstuvwxyz"}
        />
      </Keyboard>
      <ToastContainer />
    </main>
  );
}

export default App;
