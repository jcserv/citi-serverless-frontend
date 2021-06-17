import { Button } from '@chakra-ui/react';
import * as React from 'react';
import { Card } from './Card';
import { CardContent } from './Card/CardContent';
import { CardHeader } from './Card/CardHeader';
import { Stock } from './Card/Stock';

export const StonkList = ({ header, stocks }) => (
	<Card maxW="3xl" mx="auto">
		<CardHeader
			title={header}
			action={
				<Button variant="link" minW="20">
					View All
				</Button>
			}
		/>
		<CardContent>{stocks && stocks.map((stock, index) => <Stock key={`stock-${index}`} {...stock} />)}</CardContent>
	</Card>
);
