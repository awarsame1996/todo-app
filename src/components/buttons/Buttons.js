import React, { useState } from 'react';

const buttons = ['All', 'Active', 'Completed'];

const Button = ({ text, isActive, setActive }) => {
	return (
		<button
			style={{
				backgroundColor: 'white',
				color: isActive ? 'blue' : 'lightgray',
				border: 'none',
				borderRadius: 'none',
				margin: '5px',
			}}
			onClick={() => setActive(text)}
		>
			{text}
		</button>
	);
};

const ButtonList = () => {
	const [active, setActive] = useState(null);

	return (
		<div>
			{buttons.map((button) => (
				<Button
					key={button}
					text={button}
					isActive={active === button}
					setActive={setActive}
				/>
			))}
		</div>
	);
};

export default ButtonList;
