import { Box, Heading } from '@chakra-ui/react';
import { CartesianGrid, Legend, Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import React from 'react';

const data = [
	{
		name: 'TSLA',
		value: 2400
	},
	{
		name: 'C',
		value: 1398
	},
	{
		name: 'AAPL',
		value: 9800
	},
	{
		name: 'AMZN',
		value: 3908
	},
	{
		name: 'AMC',
		value: 4800
	}
];

const TopStocksChart = () => (
	<Box borderWidth="1px" borderRadius="lg" m="4" width="500px" height="400px">
		<Heading as="h3" size="md" m="4">
			Top Performing Stocks
		</Heading>
		<ResponsiveContainer width="75%" height="100%">
			<BarChart height={300} data={data}>
				<XAxis dataKey="name" />
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Legend />
				<Bar dataKey="value" fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	</Box>
);

export default TopStocksChart;
