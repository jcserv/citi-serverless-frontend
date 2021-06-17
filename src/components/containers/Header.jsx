import { BellIcon, SearchIcon } from '@chakra-ui/icons';
import { Heading, HStack, IconButton, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import SearchField from '../SearchField';
import UserProfile from '../UserProfile';

const Header = () => {
	const [ isSearchExpanded, setIsSearchExpanded ] = useState(false);
	return (
		<HStack className="row-12" m="2">
			<Heading as="h4" size="lg">
				Overview
			</Heading>
			<Spacer />
			{isSearchExpanded ? (
				<Fade>
					<SearchField onBlur={() => setIsSearchExpanded(false)}/>
				</Fade>
			) : (
				<IconButton
					aria-label="Search database"
					variant="ghost"
					icon={<SearchIcon />}
					onClick={() => setIsSearchExpanded(!isSearchExpanded)}
				/>
			)}
			<IconButton aria-label="Notifications" variant="ghost" icon={<BellIcon />} />
			<UserProfile
				name="Jane Doe"
				image="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
				email="jane.doe@gmail.com"
			/>
		</HStack>
	);
};

export default Header;
