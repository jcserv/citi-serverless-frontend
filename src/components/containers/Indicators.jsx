import { HStack, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';

const IndicatorCard = ({ label, number, color, type, percentage }) => (
	<StatGroup borderWidth="1px" borderRadius="lg" h="100%" w="25%">
		<Stat m={4}>
			<StatLabel>{label}</StatLabel>
			<StatNumber color={color}>{number}</StatNumber>
			<StatHelpText>
				{type && <StatArrow type={type} />}
				{percentage}
			</StatHelpText>
		</Stat>
	</StatGroup>
);

const Indicators = ({ indicators }) => (
	<div className="d-flex row justify-content-center" style={{ marginTop: '50px' }}>
		<HStack spacing="48px">
			{indicators && indicators.map((indicator, index) => <IndicatorCard key={`ind-${index}`} {...indicator} />)}
		</HStack>
	</div>
);

export default Indicators;
