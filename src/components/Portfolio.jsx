import { Button } from '@chakra-ui/react';
import * as React from 'react';
import { BiFilter, BiSortUp } from "react-icons/bi";

import { Card } from './Card';
import { CardContent } from './Card/CardContent';
import { CardHeader } from './Card/CardHeader';
import { Stock } from './Stock';

const Portfolio = ({ header, stocks }) => (
	<div className="d-flex row justify-content-center" style={{ marginTop: '100px' }}>
		<Card maxW="3xl" mx="auto" w="800px" mb="2">
			<CardHeader
				title={header}
				action={
					<div>
						<Button variant="link" minW="20" leftIcon={<BiSortUp />}>
							Sort
						</Button>
						<Button variant="link" minW="20" leftIcon={<BiFilter />}>
							Filter
						</Button>
					</div>
				}
			/>
			<CardContent>
				{stocks && stocks.map((stock, index) => <Stock key={`stock-${index}`} {...stock} />)}
			</CardContent>
		</Card>
	</div>
);

export default Portfolio;
