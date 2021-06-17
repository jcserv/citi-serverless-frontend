import { HStack } from '@chakra-ui/react';
import React from 'react';

import IndicatorCard from './IndicatorCard';

const Indicators = ({ indicators }) => (
	<div className="d-flex row justify-content-center" style={{ marginTop: "100px" }}>
		<HStack spacing="48px">{indicators && indicators.map((indicator, index) => <IndicatorCard {...indicator} />)}</HStack>
	</div>
);

export default Indicators;
