import { Box } from '@chakra-ui/react';
import React from 'react';

import AnalysisCalendar from './AnalysisCalendar';
import TopStocksChart from './TopStocksChart';
import PerformanceGraph from './PerformanceGraph';

const Metrics = () => (
	<div className="d-flex row justify-content-center" style={{ marginTop: '100px' }}>
		<Box borderWidth="1px" borderRadius="lg" ml="4" mr="2" w="1300px">
			<div className="row">
				<div className="d-flex col-6 align-items-center">
					<PerformanceGraph />
				</div>
				<div className="col-2" />
				<div className="col-4">
					<div className="d-flex row justify-content-center m-2">
						<AnalysisCalendar />
					</div>
					<div className="d-flex row justify-content-center m-2">
						<TopStocksChart />{' '}
					</div>
				</div>
			</div>
		</Box>
	</div>
);

export default Metrics;
