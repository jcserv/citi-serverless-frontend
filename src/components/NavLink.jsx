import { HStack, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';

const NavLink = ({ icon, isActive, label, ...rest }) => (
	<Link
		display="block"
		py={2}
		px={3}
		borderRadius="md"
		transition="all 0.3s"
		fontWeight="medium"
		lineHeight="1.5rem"
		color="whiteAlpha.900"
		{...rest}
	>
		<HStack spacing={4}>
			<Icon as={icon} boxSize="20px" />
			<Text as="span">{label}</Text>
		</HStack>
	</Link>
);

export default NavLink;