import { Box, Flex, useColorModeValue, Spacer } from '@chakra-ui/react';
import * as React from 'react';

export const Stock = ({ name, ticker, exchange, amount, currency, ...rest }) => {
	return (
		<Flex
			as="dl"
			width="100%"
			direction={{
				base: 'column',
				sm: 'row'
			}}
			px="6"
			py="4"
			_even={{
				bg: useColorModeValue('gray.50', 'gray.600')
			}}
			{...rest}
		>
			<Box minWidth="180px">
				{name} ({ticker}) &bull; {exchange}
			</Box>
			<Spacer />
			<Box>
				${amount} {currency}
			</Box>
		</Flex>
	);
};
