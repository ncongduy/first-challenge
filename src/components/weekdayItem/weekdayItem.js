import MinimumDistanceSlider from '../slider';
import './weekdayItem.css';

export default function WeekdayItem({ day }) {
	return (
		<div className='weekday'>
			<div className='containerCheckbox'>
				<input type='checkbox' id={day} />
				<label htmlFor={day}>{day[0].toUpperCase() + day.slice(1)}</label>
			</div>
			<MinimumDistanceSlider />
		</div>
	);
}
