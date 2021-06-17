import React, { useEffect, useState } from "react";

import Header from '../components/containers/Header';
import Indicators from '../components/containers/Indicators';
import Lists from '../components/containers/Lists';
import Metrics from '../components/containers/Metrics';
import Portfolio from "../components/Portfolio";
import SideNav from '../components/containers/SideNav';

import { getList } from "../network/requests";
import { indicators, portfolio } from "../data"

function App() {
	
	useEffect(() => {
		async function fetchList() {
			const data = await getList();
			console.log(data);
		};
		fetchList();
	}, []);

	return (
		<div className="row app" style={{ width: '100vw' }}>
			<SideNav />
			<div className="col">
				<Header />
				<Indicators indicators={indicators} />
				<Metrics />
				<Lists />
				<Portfolio header="Your portfolio" stocks={portfolio} />
			</div>
		</div>
	);
}

export default App;
