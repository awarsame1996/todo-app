import darkIcon from '../assets/images/icon-dark.svg';
import lightIcon from '../assets/images/icon-light.svg';

import { useState } from 'react';

import './index.css';
import { TodoInput } from './todoForm';

export const Hero = (props) => {
	const [theme, setTheme] = useState('light');
	const [imgSrc, setImgSrc] = useState(lightIcon);
	const switchTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			setImgSrc(darkIcon);
			props.onThemeChange(theme);
			console.log(props);
		} else {
			setTheme('light');
			setImgSrc(lightIcon);
			props.onThemeChange(theme);
		}
	};

	return (
		<div className={`header ${theme}`}>
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
				<TodoInput />
			</div>
		</div>
	);
};
