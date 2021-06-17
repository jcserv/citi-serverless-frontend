import { Box, Divider, Flex, Heading, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';
import { AiFillPieChart } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { FaLightbulb, FaList, FaRegQuestionCircle, FaMoneyCheckAlt } from 'react-icons/fa';
import NavLink from './NavLink';

const SideNav = () => (
	<Flex
		h="200vh"
		width={{
			sm: 'xs'
		}}
		direction="column"
		bg="#363740"
		color="white"
		px={6}
		py={8}
		className="col-4"
	>
		<Box mb={8} textAlign="start">
			<Heading as="h1" size="md">
				Dashboard
			</Heading>
		</Box>
		<Stack spacing={6} mb="2">
			<Stack>
				<NavLink label="Overview" icon={AiFillPieChart} isActive />
				<NavLink label="Portfolio" icon={FaMoneyCheckAlt} />
				<NavLink label="Goals" icon={FaLightbulb} />
				<NavLink label="Activity" icon={FaList} />
			</Stack>
		</Stack>
		<Divider borderColor="whiteAlpha.400" />
		<Stack mt="2">
			<NavLink label="Settings" icon={BsFillGearFill} />
			<NavLink label="Help" icon={FaRegQuestionCircle} />
		</Stack>
	</Flex>
);

export default SideNav;
