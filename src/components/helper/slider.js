import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const minDistance = 10;

function createMarks() {
	const marks = [];
	const startHour = 6;
	const endHour = 23;
	const labels = [2, 6, 10, 14];

	const range = (endHour - startHour) * 10;

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

export default function MinimumDistanceSlider({ disableTime }) {
	const [value1, setValue1] = React.useState([100, 140]);

	const handleChange1 = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setValue1([
				Math.min(newValue[0], value1[1] - minDistance),
				value1[1],
			]);
		} else {
			setValue1([
				value1[0],
				Math.max(newValue[1], value1[0] + minDistance),
			]);
		}
	};

	return (
		<Box sx={{ width: 1000 }}>
			{disableTime ? (
				<Slider
					getAriaLabel={() => 'Minimum distance'}
					min={0}
					max={170}
					step={10}
					value={value1}
					onChange={handleChange1}
					marks={createMarks()}
					disableSwap
				/>
			) : (
				<Slider
					getAriaLabel={() => 'Minimum distance'}
					min={0}
					max={170}
					step={10}
					value={value1}
					onChange={handleChange1}
					marks={createMarks()}
					disableSwap
					disabled
				/>
			)}
			<Box sx={{ m: 1 }} />
		</Box>
	);
}
