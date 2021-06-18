import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import Navbar from '../components/NavBar/index';
import CallToAction from '../components/CallToAction';
import Features from '../components/Features';

const Landing = () => {
	return (
		<Flex direction="column" bg='gray.100' height="100vh">
			<Navbar />
			<CallToAction />
			<Features />
		</Flex>
	);
};

export default Landing;
