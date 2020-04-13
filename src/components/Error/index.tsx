import React from 'react';
import { Paper, Typography } from '@material-ui/core';

interface ErrorProps {
	message: string;
}

const Error: React.FC<ErrorProps> = (props: ErrorProps): JSX.Element => {
	const { message } = props;

	return (
		<Paper>
			<Typography variant="h6" gutterBottom>
				{message}
			</Typography>
		</Paper>
	);
};

export default Error;
