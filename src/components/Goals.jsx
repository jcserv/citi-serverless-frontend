import { Button } from '@chakra-ui/react';
import * as React from 'react';
import { Card } from './Card';
import { CardContent } from './Card/CardContent';
import { CardHeader } from './Card/CardHeader';
import { Goal } from './Goal';

export const Goals = ({ header, goals }) => (
	<Card maxW="3xl" mx="auto" width="600px">
		<CardHeader
			title={header}
			action={
				<Button variant="link" minW="20">
					View All
				</Button>
			}
		/>
		<CardContent>{goals && goals.map((goal, index) => <Goal key={`goal-${index}`} {...goal} />)}</CardContent>
	</Card>
);
