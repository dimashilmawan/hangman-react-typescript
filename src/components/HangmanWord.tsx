type HangmanWordProps = {
	reveal?: boolean;
	wordToGuess: string;
	guessedLetters: string[];
};

const HangmanWord = ({
	reveal,
	wordToGuess,
	guessedLetters,
}: HangmanWordProps) => {
	return (
		<div className="-mt-2 flex gap-2  p-0 text-4xl font-bold uppercase ">
			{wordToGuess.split("").map((letter, index) => {
				return (
					<span
						key={index}
						className="w-10 border-b-[4px] border-black py-1 px-2 text-center "
					>
						<span
							className={`${
								guessedLetters.includes(letter) || reveal
									? "visible"
									: " invisible"
							} ${
								!guessedLetters.includes(letter) && reveal
									? "text-red-500"
									: "text-black"
							}`}
						>
							{letter}
						</span>
					</span>
				);
			})}
		</div>
	);
};
export default HangmanWord;
