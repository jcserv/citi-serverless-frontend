import { Box, Flex, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { IoRocket } from 'react-icons/io5';
import { NavItem } from './NavItem';

const MobileNavMenu = (props) => {
	const { isOpen } = props;
	return (
		<Flex
			hidden={!isOpen}
			as="nav"
			direction="column"
			bg="#363740"
			position="fixed"
			height="calc(100vh - 4rem)"
			top="16"
			insetX="0"
			zIndex={10}
			w="full"
		>
			<Box px="4">
				<NavItem.Mobile label="Login" />
				<NavItem.Mobile label="Signup" />
			</Box>
		</Flex>
	);
};

const DesktopNavMenu = () => (
	<HStack
		spacing="3"
		flex="1"
		display={{
			base: 'none',
			lg: 'flex'
		}}
	>
		<NavItem.Desktop icon={<AiOutlineLogin />} label="Login" />
		<NavItem.Desktop icon={<IoRocket />} label="Signup" />
	</HStack>
);

export const NavMenu = {
	Mobile: MobileNavMenu,
	Desktop: DesktopNavMenu
};
