import MinimumDistanceSlider from '../slider';
import './weekdayItem.css';

export default function WeekdayItem() {
	return (
		<div className='weekday'>
			<div>
				<input type='checkbox' id='monday' />
				<label htmlFor='monday'>Mon</label>
			</div>
			<MinimumDistanceSlider />
		</div>
	);
}
