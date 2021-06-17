import { Avatar, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const UserProfile = ({ name, image, email }) => (
	<HStack spacing="4" px="2" pt={1}>
		<Flex direction="column">
			<Text fontWeight="medium">{name}</Text>
			<Text fontSize="sm" lineHeight="shorter">
				{email}
			</Text>
		</Flex>
		<Avatar size="md" name={name} src={image} />
	</HStack>
);

export default UserProfile;
