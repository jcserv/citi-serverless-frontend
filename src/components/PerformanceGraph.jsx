import { Box, Heading } from '@chakra-ui/react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import React from 'react';

const data = [
	{
		name: 'Mon',
		value: 2400,
	},
	{
		name: 'Tues',
		value: 1398,
	},
	{
		name: 'Wed',
		value: 9800,
	},
	{
		name: 'Thurs',
		value: 3908,
	},
	{
		name: 'Fri',
		value: 4800,
	},
];

const PerformanceGraph = () => (
	<Box borderWidth="1px" borderRadius="lg" m="4" height="400px" width="600px">
		<Heading as="h3" size="md" m="4">
			TFSA
		</Heading>
		<ResponsiveContainer width="100%" height="100%">
			<LineChart data={data}>
				<XAxis dataKey="name" />
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
			</LineChart>
		</ResponsiveContainer>
	</Box>
);

export default PerformanceGraph;
