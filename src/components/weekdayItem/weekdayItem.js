import React, { useContext } from 'react';
import MinimumDistanceSlider from '../helper/slider';
import { AppContext } from '../../App';
import './weekdayItem.css';

export default function WeekdayItem({ day }) {
	const { checkDay, setCheckDay } = useContext(AppContext);

	function isChecked(day) {
		return checkDay.includes(day);
	}

	function handleCheck(day) {
		setCheckDay((prev) => {
			if (isChecked(day)) {
				return prev.filter((item) => item !== day);
			} else {
				return [...prev, day];
			}
		});
	}

	return (
		<div className='weekday'>
			<div className='containerCheckbox'>
				<input
					type='checkbox'
					id={day}
					checked={isChecked(day)}
					onChange={() => handleCheck(day)}
				/>
				<label htmlFor={day}>
					{day[0].toUpperCase() + day.slice(1)}
				</label>
			</div>
			<MinimumDistanceSlider disableTime={isChecked(day)} day={day} />
		</div>
	);
}
