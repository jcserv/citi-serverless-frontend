import { Box, Heading } from '@chakra-ui/react';
import { CartesianGrid, Legend, Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import React from 'react';

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100
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
				<Bar dataKey="pv" fill="#8884d8" />
				<Bar dataKey="uv" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>
	</Box>
);

export default TopStocksChart;
