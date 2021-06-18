import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiSortUp, BiTime } from 'react-icons/bi';

import { Card } from './Card';
import { CardContent } from './Card/CardContent';
import { CardHeader } from './Card/CardHeader';
import { Stock } from './Stock';

import { tickerToStockData } from "../data"


const Portfolio = ({ header, stocks }) => {
	const [ isSortEnabled, setIsSortEnabled ] = useState(0);
	const mappedStocks = stocks.map((stock) => tickerToStockData[Object.keys(stock)[0]]);
	const stocksCp = [...mappedStocks];

	function sortStocks() {
		stocksCp.sort((a,b) => {
			const x =  parseInt(b.amount), y = parseInt(a.amount);
			if (isSortEnabled === 1) return x - y;
			else if (isSortEnabled === 2) return y - x;
			return 0;
		});
	}

	let stonks = mappedStocks;
	if (isSortEnabled !== 0) {
		sortStocks();
		stonks = stocksCp;
	}


	return (
		<div className="d-flex row justify-content-center" style={{ marginTop: '100px' }}>
			<Card maxW="3xl" mx="auto" w="800px" mb="2">
				<CardHeader
					title={header}
					action={
						<div>
							<Button
								variant="link"
								minW="20"
								leftIcon={<BiSortUp />}
								onClick={() => {
									if (isSortEnabled === 2) {
										setIsSortEnabled(0);
									} else {
										setIsSortEnabled(isSortEnabled + 1);
									}
								}}
							>
								Sort
							</Button>
							<Menu w="50px">
								<MenuButton as={Button} variant="link" minW="20" leftIcon={<BiTime />}>
									Timeframe
								</MenuButton>
								<MenuList>
									<MenuItem>Daily</MenuItem>
									<MenuItem>Weekly</MenuItem>
									<MenuItem>Monthly</MenuItem>
									<MenuItem>All Time</MenuItem>
								</MenuList>
							</Menu>
						</div>
					}
				/>
				<CardContent>
					{stonks && stonks.map((stock, index) => <Stock key={`stock-${index}`} {...stock} />)}
				</CardContent>
			</Card>
		</div>
	);
};

export default Portfolio;
