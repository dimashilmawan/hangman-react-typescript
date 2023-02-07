const KEYS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

type KeyboardProps = {
	disabled?: boolean;
	activeLetter: string[];
	inactiveLetter: string[];
	onAddGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
	disabled = false,
	activeLetter,
	inactiveLetter,
	onAddGuessedLetter,
}: KeyboardProps) => {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] gap-1 ">
			{KEYS.map(key => {
				const isActive = activeLetter.includes(key);
				const isInactive = inactiveLetter.includes(key);
				return (
					<button
						className={`aspect-square  cursor-pointer border-2 border-black text-center font-bold uppercase focus:outline-none hover:enabled:bg-indigo-300 focus:enabled:bg-indigo-300 
						${isActive ? "bg-indigo-500 text-white" : ""}
						${isInactive ? "opacity-40" : ""}
						`}
						key={key}
						disabled={isActive || isInactive || disabled}
						onClick={() => onAddGuessedLetter(key)}
					>
						{key}
					</button>
				);
			})}
		</div>
	);
};
export default Keyboard;
