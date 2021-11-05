import './App.css';
import Header from './components/header/header';
import Button from '@mui/material/Button';
import WeekdayList from './components/weekdayList/weekdayList';

function App() {
	return (
		<div className='App'>
			<div>
				<Header />
        <WeekdayList />
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
