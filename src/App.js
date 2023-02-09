import { Hero } from './components/Hero.js';
import React, { useState } from 'react';
import { List } from './components/List/List.js';
import './App.css';

export const App = () => {
	const [isTheme, setIsTheme] = useState('light');
	const onThemeChange = (themeChange) => {
		const theme = themeChange;
		setIsTheme(theme);
		console.log(isTheme);
	};
	return (
		<div className='app' data-theme={isTheme}>
			<Hero onThemeChange={onThemeChange}></Hero>
			<List />
		</div>
	);
};
