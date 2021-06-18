import * as React from 'react';
import { chakra, useColorModeValue as mode } from '@chakra-ui/react';

export const TabLink = (props) => (
	<chakra.a
		fontWeight="semibold"
		px="4"
		py="3"
		color={mode('gray.600', 'gray.400')}
		borderBottom="2px solid transparent"
		transition="all 0.2s"
		{...props}
	/>
);
