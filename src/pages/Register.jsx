import { Box, Heading, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

import { Card } from '../components/Card';
import { RegisterForm } from '../components/RegisterForm';
import Navbar from '../components/NavBar/index';

function Register() {
	return (
		<Flex direction="column" bg="gray.100" height="100vh">
			<Navbar />
			<Box maxW="md" mx="auto">
				<Heading textAlign="center" size="xl" fontWeight="extrabold" pt="50px">
					Sign up to start investing now!
				</Heading>
				<Card p="4" mt="40px">
					<RegisterForm />
					<Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
					<Text as="span">Have an account?</Text>
					<Link href="/login"> Login here</Link>
				</Text>
				</Card>
			</Box>
		</Flex>
	);
}

export default Register;
