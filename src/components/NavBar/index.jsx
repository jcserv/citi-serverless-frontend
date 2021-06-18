import { Flex, Heading, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { MobileHamburgerMenu } from './MobileHamburgerMenu';
import { NavMenu } from './NavMenu';
import { useMobileMenuState } from './useMobileMenuState';

const Navbar = () => {
	const { isMenuOpen, toggle } = useMobileMenuState();
	return (
		<Flex align="center" bg="#363740" color="white" px="6" minH="16">
			<Flex justify="space-between" align="center" w="full">
				<MobileHamburgerMenu onClick={toggle} isOpen={isMenuOpen} />
				<NavMenu.Mobile isOpen={isMenuOpen} />
				<Heading
					as="a"
					href="/"
					transition="all 0.2s"
					_hover={{
						color: 'blue.400'
					}}
				>
					Citrade
				</Heading>
				<HStack spacing="3">
					<NavMenu.Desktop />
				</HStack>
			</Flex>
		</Flex>
	);
};

export default Navbar;
