import { Box, Divider, Flex, Heading, Spacer, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { AiFillPieChart } from 'react-icons/ai';
import { BsFillGearFill } from "react-icons/bs";
import { FaLightbulb, FaList, FaRegQuestionCircle, FaMoneyCheckAlt } from 'react-icons/fa';
import { NavLink } from './NavLink';
import { SearchField } from './SearchField';
import { UserProfile } from './UserProfile';

export const SideNav = () => {
	return (
		<Flex
			height="100vh"
			width={{
				base: 'full',
				sm: 'xs'
			}}
			direction="column"
			bg="#363740"
			color="white"
			px={6}
			py={8}
		>
			<Box mb={8} textAlign="start">
				<Heading as="h1" size="md">Dashboard</Heading>
			</Box>
			<SearchField mb={6} />
			<Stack spacing={6}>
				<Stack>
					<NavLink label="Overview" icon={AiFillPieChart} isActive />
					<NavLink label="Portfolio" icon={FaMoneyCheckAlt} />
					<NavLink label="Goals" icon={FaLightbulb} />
					<NavLink label="Activity" icon={FaList} />
				</Stack>
				<Divider borderColor="whiteAlpha.400" />
				<Stack>
					<NavLink label="Settings" icon={BsFillGearFill} />
					<NavLink label="Help" icon={FaRegQuestionCircle} />
				</Stack>
			</Stack>
			<Spacer />
			<UserProfile
				name="Jane Doe"
				image="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
				email="jane.doe@gmail.com"
			/>
		</Flex>
	);
};
