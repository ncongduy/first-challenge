import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const minDistance = 10;
const startHour = 6;
const endHour = 23;
const range = (endHour - startHour) * 10;

function createMarks() {
	const marks = [];
	const labels = [2, 6, 10, 14];

	for (let i = 0; i <= range; i = i + 10) {
		const mark = {};
		mark['value'] = i;
		marks.push(mark);
	}

	marks.forEach((mark, index) => {
		if (labels.includes(index)) {
			mark['label'] = startHour + index;
		} else {
			mark['label'] = '|';
		}
	});

	return marks;
}

function convertValueToTime(arr) {
	const time = [];
	const value = [];

	for (let i = startHour; i <= endHour; i++) {
		time.push(i.toString() + ':00');
	}

	for (let j = 0; j <= range; j = j + 10) {
		value.push(j);
	}

	const convertTime = [];

	value.map((valueSlider, index) => {
		if (arr.includes(valueSlider)) {
			convertTime.push(time[index]);
		}

		return valueSlider;
	});

	return convertTime;
}

export default function MinimumDistanceSlider({ disableTime, day }) {
	const { setSchedule } = useContext(AppContext);

	const [value, setValue] = React.useState([100, 140]);
	const [time, setTime] = React.useState(convertValueToTime(value));

	const handleChange = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
			setTime(convertValueToTime(value));
			setSchedule((prev) => ({
				...prev,
				[day]: time,
			}));
		} else {
			setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
			setTime(convertValueToTime(value));
			setSchedule((prev) => ({
				...prev,
				[day]: time,
			}));
		}
	};

	return (
		<Box sx={{ width: '100%' }}>
			{disableTime ? (
				<Slider
					getAriaLabel={() => 'Minimum distance'}
					min={0}
					max={170}
					step={10}
					value={value}
					onChange={handleChange}
					marks={createMarks()}
					disableSwap
				/>
			) : (
				<Slider
					getAriaLabel={() => 'Minimum distance'}
					min={0}
					max={170}
					step={10}
					value={value}
					onChange={handleChange}
					marks={createMarks()}
					disableSwap
					disabled
				/>
			)}
			{/* <Box sx={{ m: 1 }} /> */}
		</Box>
	);
}
