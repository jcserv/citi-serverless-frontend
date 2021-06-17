import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import React from 'react';

const SearchField = ({ onBlur, ...rest }) => (
	<InputGroup {...rest}>
		<InputLeftElement pointerEvents="none">
			<SearchIcon opacity={0.82} />
		</InputLeftElement>
		<Input
			placeholder="Search"
			bg="gray.300"
			border={0}
			_placeholder={{
				color: 'black'
			}}
			onBlur={onBlur}
		/>
	</InputGroup>
);

export default SearchField;
