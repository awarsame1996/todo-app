import darkIcon from '../assets/images/icon-dark.svg';
import lightIcon from '../assets/images/icon-light.svg';

import { useState } from 'react';

import './index.css';

export const Hero = () => {
	const [theme, setTheme] = useState('light');
	const [imgSrc, setImgSrc] = useState(lightIcon);
	const switchTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			setImgSrc(darkIcon);
			console.log(theme);
		} else {
			setTheme('light');
			setImgSrc(lightIcon);
		}
	};

	return (
		<div className='header' data-theme={theme}>
			<div className='header-title'>
				<h1 className='title'>TODO</h1>
				<img
					src={imgSrc}
					alt='moon'
					className='moon-icon'
					onClick={switchTheme}
				/>
			</div>
			<div className='input-container'>
				<div className='circle'></div>
				<input
					className='input-field'
					type='text'
					placeholder='Create a new todo...'
				/>
			</div>
		</div>
	);
};
