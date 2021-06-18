import { Box, SimpleGrid, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc';

const Feature = (props) => {
	const { title, children, icon } = props;
	return (
		<Stack
			spacing={{
				base: '3',
				md: '6'
			}}
			direction={{
				base: 'column',
				md: 'row'
			}}
		>
			<Box fontSize="6xl">{icon}</Box>
			<Stack spacing="1">
				<Text fontWeight="extrabold" fontSize="lg">
					{title}
				</Text>
				<Box color={mode('gray.600', 'gray.400')}>{children}</Box>
			</Stack>
		</Stack>
	);
};

const Features = () => (
	<Box
		as="section"
		maxW="5xl"
		mx="auto"
		py="12"
		px={{
			base: '6',
			md: '8'
		}}
	>
		<SimpleGrid
			columns={{
				base: 1,
				md: 2
			}}
			spacingX="10"
			spacingY={{
				base: '8',
				md: '14'
			}}
		>
			<Feature title="Incredible analysis" icon={<FcDoughnutChart />}>
				View all the most relevant statistics for your portfolios to make informed decisions.
			</Feature>
			<Feature title="Always up to date" icon={<FcTimeline />}>
				Our financial data is constantly pulled from the markets
			</Feature>
			<Feature title="Support for multiple devices" icon={<FcMultipleDevices />}>
				Invest anywhere - on your phone, tablet, or desktop.
			</Feature>
			<Feature title="Secure" icon={<FcPrivacy />}>
				We take your privacy seriously.
			</Feature>
		</SimpleGrid>
	</Box>
);

export default Features;
