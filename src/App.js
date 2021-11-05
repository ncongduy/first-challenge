import './App.css';
import Button from '@mui/material/Button';
import MinimumDistanceSlider from './components/slider';

function App() {
	return (
		<div className='App'>
			<div>
				<h2>i'm weekly available at</h2>
				<p>
					Note: Currently availability sliders are disabled. Coming
					soon!
				</p>

				<MinimumDistanceSlider />

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
