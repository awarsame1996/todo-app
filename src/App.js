import { Hero } from './components/Hero.js';
import React from 'react';
import { List } from './components/List/List.js';
import './App.css';

export const App = () => {
	return (
		<div>
			<Hero></Hero>
			<List />
		</div>
	);
};
