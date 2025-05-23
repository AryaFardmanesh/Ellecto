import { CSSProperties } from 'react';
import colors from '@/utils/colors';

const stylesheet: {
	[key: string]: CSSProperties
} = {
	container: {
		width: '100vw',
		height: '100vh',
	},
	card: {
		width: '380px',
	},
	submitBtn: {
		width: '100%',
		height: '32px',
		background: colors.primary,
		color: 'white',
		border: 0,
		borderRadius: '6px',
		boxShadow: '0 2px 0 rgba(5,145,255,0.1)',
	},
};

export default stylesheet;
