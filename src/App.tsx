import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./data/wordList.json";

function getWord() {
	return words[Math.floor(Math.random() * words.length)];
}

function App() {
	const [wordToGuess, setWordToGuess] = useState(getWord);

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const incorrectLetters = guessedLetters.filter(letter => {
		return !wordToGuess.includes(letter);
	});

	const isLoser: boolean = incorrectLetters.length > 6;
	const isWinner: boolean = wordToGuess
		.split("")
		.every(letter => guessedLetters.includes(letter));

	const addGuessedLetterHandler = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return;
			setGuessedLetters(prevGuessedLetters => [...prevGuessedLetters, letter]);
		},
		[guessedLetters, isWinner, isLoser]
	);

	useEffect(() => {
		console.log("useEffect");
		const handler = (e: KeyboardEvent) => {
			const key = e.key;

			if (!key.match(/^[a-z]$/)) return;
			e.preventDefault();
			addGuessedLetterHandler(key);
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [addGuessedLetterHandler]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;

			if (key !== "Enter") return;
			e.preventDefault();
			setGuessedLetters([]);
			setWordToGuess(getWord());
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [addGuessedLetterHandler]);

	return (
		<div className="mx-auto flex max-w-3xl flex-col items-center gap-6 py-2 px-8">
			<h1 className="h-10 text-3xl font-bold uppercase underline">
				{isWinner && "Winner! Refresh to Try Again"}
				{isLoser && "Nice Try! Refresh to Try Again"}
			</h1>
			<HangmanDrawing numberOfIncorrectGuesses={incorrectLetters.length} />
			<HangmanWord
				reveal={isLoser}
				wordToGuess={wordToGuess}
				guessedLetters={guessedLetters}
			/>
			<div className="self-stretch">
				<Keyboard
					disabled={isWinner || isLoser}
					activeLetter={guessedLetters.filter(letter =>
						wordToGuess.includes(letter)
					)}
					inactiveLetter={incorrectLetters}
					onAddGuessedLetter={addGuessedLetterHandler}
				/>
			</div>
		</div>
	);
}

export default App;
