import Header from '../components/containers/Header';
import Indicators from '../components/containers/Indicators';
import Lists from '../components/containers/Lists';
import Metrics from '../components/containers/Metrics';
import SideNav from '../components/containers/SideNav';

import { indicators } from "../data"

function App() {
	return (
		<div className="row" style={{ width: '100vw' }}>
			<SideNav />
			<div className="col">
				<Header />
				<Indicators indicators={indicators} />
				<Metrics />
				<Lists />
			</div>
		</div>
	);
}

export default App;
