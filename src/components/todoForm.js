import React, { useState, useEffect } from 'react';

export const TodoInput = () => {
	const [input, setInput] = useState('');
	const [yourTask, setYourTask] = useState([]);

	const updateLocalStorage = (array) => {
		localStorage.setItem('yourTask', JSON.stringify(array));
		setYourTask(array);
	};

	const addTask = () => {
		const newObject = {
			id: Math.floor(Math.random() * 1000),
			value: input,
			completed: false,
		};
		const updatedTasks = [...yourTask, newObject];
		updateLocalStorage(updatedTasks);
	};

	useEffect(() => {
		const storedTasks = localStorage.getItem('yourTask');
		if (storedTasks) {
			setYourTask(JSON.parse(storedTasks));
		}
	}, []);
	const inputHandler = (e) => {
		setInput(e.target.value);
	};

	return (
		<form onSubmit={addTask}>
			<input
				onChange={inputHandler}
				className='input-field'
				type='text'
				placeholder='Create a new todo...'
				value={input}
			/>
		</form>
	);
};
