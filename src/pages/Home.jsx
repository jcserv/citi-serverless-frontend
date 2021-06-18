import React, { useEffect, useState } from "react";

import Header from '../components/containers/Header';
import Indicators from '../components/containers/Indicators';
import Lists from '../components/containers/Lists';
import Metrics from '../components/containers/Metrics';
import Portfolio from "../components/Portfolio";
import SideNav from '../components/containers/SideNav';

import { getStocks } from "../network/requests";
import { indicators, mockUser } from "../data"

function Home() {

	const [user, setUser] = useState(mockUser);
	
	useEffect(() => {
		async function fetchList() {
			const data = await getStocks({userId: "14"});
			setUser(data);
		};
		fetchList();
	}, []);

	console.log(user);

	return (
		<div className="row app" style={{ width: '100vw' }}>
			<SideNav />
			<div className="col">
				<Header email={user.email} name={user.name} />
				<Indicators indicators={indicators}/>
				<Metrics />
				<Lists />
				<Portfolio header="Your portfolio" stocks={user.portfolio} />
			</div>
		</div>
	);
}

export default Home;
