import './App.css';
import Header from './components/header/header';
import Button from '@mui/material/Button';
import WeekdayItem from './components/weekdayItem/weekdayItem';

function App() {
	return (
		<div className='App'>
			<div>
				<Header />
				<WeekdayItem />
				<Button
					variant='contained'
					onClick={() => {
						alert('saved!');
					}}
				>
					Save
				</Button>
			</div>
		</div>
	);
}

export default App;
