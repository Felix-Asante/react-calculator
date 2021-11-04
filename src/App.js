import React, { useState } from "react";
import "./App.css";

function App() {
	const [input, setInput] = useState("");
	const [outPut, setOutPut] = useState("00");
	const deleteInput = () => {
		const len = input.length - 1;
		setOutPut("");

		if (len > 1) {
			setInput((prevState) => {
				return prevState.slice(0, len);
			});
		} else {
			setInput("");
		}
	};
	const inputHandler = (e) => {
		setOutPut("");
		setInput((prevState) => {
			return prevState.concat(e.target.name);
		});
	};
	const clearCalculation = () => {
		setInput("");
		setOutPut("");
	};

	const outPutHandler = () => {
		try {
			// eslint-disable-next-line
			setOutPut(eval(input));
		} catch (error) {
			setOutPut("ERROR");
		}
	};

	window.onkeyup = (e) => {
		e.preventDefault();
		setOutPut("");
		if (e.keyCode === 13) {
			console.log("hey stop");
			outPutHandler();
			return;
		}
		if (e.keyCode === 8 && input.length > 0) {
			deleteInput();
		} else if (
			e.key === "+" ||
			e.key === "-" ||
			e.key === "*" ||
			e.key === "/" ||
			e.key === "%" ||
			(e.key >= 0 && e.key <= 9)
		) {
			setInput((prevState) => {
				return prevState.concat(e.key);
			});
		}

		// if (e.keyCode === 13) {
		// 	outPutHandler();
		// }
	};
	const buttons = [
		{
			value: "Clear",
			action: clearCalculation,
			class: "bg-dark",
		},
		{
			value: "Del",
			action: deleteInput,
			class: "bg-dark",
		},
		{
			value: "%",
			action: inputHandler,
			class: "bg-dark",
		},
		{
			value: "/",
			action: inputHandler,
			class: "bg-dark",
		},

		{
			value: "7",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "8",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "9",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "*",
			action: inputHandler,
			class: "bg-dark",
		},
		{
			value: "4",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "5",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "6",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "-",
			action: inputHandler,
			class: "bg-dark",
		},
		{
			value: "1",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "2",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "3",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "+",
			action: inputHandler,
			class: "bg-dark",
		},
		{
			value: "0",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: ".",
			action: inputHandler,
			class: "text-light",
		},
		{
			value: "=",
			action: outPutHandler,
			class: "bg-green",
		},
	];
	return (
		<React.Fragment>
			<div className="wrapper">
				<div className="box">
					<div className="display bg-dark">
						<p className="input text-light">{input}</p>
						<p className="output text-green">{outPut}</p>
					</div>

					<div className="bg-light-dark">
						{buttons.map((button, index) => {
							return (
								<button
									className={button.class}
									onClick={button.action}
									key={index}
									name={button.value}
								>
									{button.value}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
