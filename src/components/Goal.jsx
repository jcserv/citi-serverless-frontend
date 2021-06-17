import { Box, Checkbox, Flex, useColorModeValue, Spacer, Badge } from '@chakra-ui/react';
import * as React from 'react';

const badges = {
	URGENT: 'red',
	NEW: 'green',
	DONE: 'blue'
};

export const Goal = ({ content, isDone, status, ...rest }) => {
	return (
		<Flex
			as="dl"
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
			<Box m="1" mr="2">
				<Checkbox defaultChecked={isDone} />
			</Box>
			<Box minWidth="180px">
				{isDone} {content}
			</Box>
			<Spacer />
			<Box>
				<Badge colorScheme={badges[status]}>{status}</Badge>
			</Box>
		</Flex>
	);
};
