import { useBoolean, useBreakpointValue } from '@chakra-ui/react';
import * as React from 'react';

export const useMobileMenuState = () => {
	const [ isMenuOpen, actions ] = useBoolean();
	const isMobileBreakpoint = useBreakpointValue({
		base: true,
		lg: false
	});
	React.useEffect(
		() => {
			if (isMobileBreakpoint === false) {
				actions.off();
			}
		},
		[ isMobileBreakpoint, actions ]
	);
	return {
		isMenuOpen,
		...actions
	};
};
