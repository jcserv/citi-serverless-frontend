import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { PasswordField } from './PasswordField';

export const LoginForm = (props) => {
	let history = useHistory();

	return (
		<chakra.form
			onSubmit={(e) => {
				e.preventDefault();
				history.push('/dashboard');
			}}
			{...props}
		>
			<Stack spacing="6">
				<FormControl id="email">
					<FormLabel>Email address</FormLabel>
					<Input name="email" type="email" autoComplete="email" required />
				</FormControl>
				<PasswordField showPassword />
				<Button type="submit" colorScheme="blue" size="lg" fontSize="md">
					Sign in
				</Button>
			</Stack>
		</chakra.form>
	);
};
