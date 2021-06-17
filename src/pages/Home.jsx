import Header from '../components/Header';
import Indicators from '../components/Indicators';
import SideNav from '../components/SideNav';

const indicators = [
	{
		label: 'Total PnL',
		number: '$1221.43',
		color: "green.500",
		type: 'increase',
		percentage: '8.36%'
	},
	{
		label: 'Daily PnL',
		number: '$81.43',
		color: "green.500",
		type: 'increase',
		percentage: '4.65%'
	},
	{
		label: 'Risk Tolerance',
		color: "orange.500",
		number: '65%',
	},
	{
		label: 'Sent',
		number: '345,670',
		type: 'increase',
		percentage: '23.36%'
	}
];

function App() {
	return (
		<div className="row" style={{ width: '100vw' }}>
			<SideNav />
			<div className="col">
				<Header />
				<Indicators indicators={indicators} />
			</div>
		</div>
	);
}

export default App;
