import { Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
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

export default IndicatorCard;
