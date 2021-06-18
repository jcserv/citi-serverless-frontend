import { Box, Button, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';

const CallToAction = () => (
	<Box as="section">
		<Box maxW="2xl" mt="4" mx="auto" px={{ base: '6', lg: '8' }} py={{ base: '16', sm: '20' }} textAlign="center">
			<Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
				Ready to invest?
			</Heading>
			<Text mt="4" fontSize="lg">
				Citrade makes investing easy, with all the tools you need to save up for the big things in life.
			</Text>
			<Button
				mt="8"
				as="a"
				href="/login"
				size="lg"
				colorScheme="blue"
				fontWeight="bold"
				transition="all 0.2s"
			>
				Get Started
			</Button>
		</Box>
	</Box>
);

export default CallToAction;
