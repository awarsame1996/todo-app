import moon from '../assets/images/icon-moon.svg';
import './index.css';

export const Hero = () => {
	return (
		<div className='header'>
			<div className='header-title'>
				<h1 className='title'>TODO</h1>
				<img className='moon-icon' src={moon} alt='moon' />
			</div>
		</div>
	);
};
