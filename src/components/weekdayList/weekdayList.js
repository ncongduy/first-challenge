import React from 'react';
import './weekdayList.css';
import WeekdayItem from '../weekdayItem/weekdayItem';

export default function WeekdayList() {
	const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

	return (
		<div>
			{daysOfWeek.map((day) => (
				<WeekdayItem day={day} />
			))}
		</div>
	);
}
