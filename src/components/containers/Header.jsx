import { BellIcon } from '@chakra-ui/icons';
import { Heading, HStack, IconButton, Spacer } from '@chakra-ui/react';
import React from 'react';

import UserProfile from '../UserProfile';

const Header = ({ email, name }) => (
	<HStack className="row-12" m="2">
		<Heading as="h4" size="lg">
			Overview
		</Heading>
		<Spacer />
		<IconButton aria-label="Notifications" variant="ghost" icon={<BellIcon />} />
		<UserProfile
			name={name}
			image="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
			email={email}
		/>
	</HStack>
);

export default Header;
