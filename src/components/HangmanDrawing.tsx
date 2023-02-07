import { cloneElement, ReactElement } from "react";

const HEAD = (
	<div className="absolute top-[34px] -right-[19px] h-[45px] w-[45px] rounded-full border-[6px] border-black" />
);
const BODY = (
	<div className="absolute top-[74px] right-[0] h-[72px] w-[6px] bg-black" />
);
const RIGHT_ARM = (
	<div className="absolute top-[64px] -right-[20px] h-[50px] w-[6px] rotate-[60deg] bg-black" />
);
const LEFT_ARM = (
	<div className="absolute top-[64px] right-[20px] h-[50px] w-[6px] -rotate-[60deg] bg-black" />
);
const RIGHT_LEG = (
	<div className="absolute top-[142px] -right-[12px] h-[50px] w-[6px] rotate-[150deg] bg-black" />
);
const LEFT_LEG = (
	<div className="absolute top-[142px] right-[12px] h-[50px] w-[6px] -rotate-[150deg] bg-black" />
);

const BODY_PART = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG].map(
	(element, key) => {
		return cloneElement(element, { key });
	}
);

type HangmanDrawingProps = {
	numberOfIncorrectGuesses: number;
};

const HangmanDrawing = ({ numberOfIncorrectGuesses }: HangmanDrawingProps) => {
	return (
		<div className="relative ">
			{BODY_PART.slice(0, numberOfIncorrectGuesses)}
			<div className="absolute top-0 right-0 h-[40px] w-[6px] bg-black" />
			<div className="ml-[100px] h-[6px] w-[100px] bg-black" />
			<div className="ml-[100px] h-[250px] w-[6px] bg-black" />
			<div className="h-[6px] w-[200px] bg-black" />
		</div>
	);
};
export default HangmanDrawing;
