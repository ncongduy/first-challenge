import React, { useContext } from 'react';
import WeekdayItem from '../weekdayItem/weekdayItem';
import { AppContext } from '../../App';
import './weekdayList.css';

export default function WeekdayList() {
	const { daysOfWeek } = useContext(AppContext);

	return (
		<div>
			{daysOfWeek.map((day) => (
				<WeekdayItem day={day} key={day} />
			))}
		</div>
	);
}
