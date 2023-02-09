import './index.css';
import cross from '../../assets/images/icon-cross.svg';
import ButtonList from '../buttons/Buttons';

export const List = () => {
	return (
		<div class='container'>
			<div className='list-container'>
				<div className='list-item'>
					<div className='circle'></div>
					<p>Item 1</p>
				</div>

				<img className='cross-icon' src={cross} alt='moon' />
			</div>
			<div className='list-container'>
				<div className='list-item'>
					<div className='circle'></div>
					<p>Item 1</p>
				</div>

				<img className='cross-icon' src={cross} alt='moon' />
			</div>
			<div className='list-container'>
				<div className='list-item'>
					<div className='circle'></div>
					<p>Item 1</p>
				</div>

				<img className='cross-icon' src={cross} alt='moon' />
			</div>
			<div className='list-info'>
				<p className='list-info__text'>3 item left</p>

				<ButtonList className='btn-container__desktop'></ButtonList>

				<div>
					<button className='btn'>Clear Completed</button>
				</div>
			</div>
		</div>
	);
};
