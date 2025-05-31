import type { Metadata } from 'next';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@ant-design/v5-patch-for-react-19';
import './global.css';

export const metadata: Metadata = {
	title: 'Ellecto',
	description: 'Online store website.',
	icons: '/logo/logo.png'
};

type RootLayoutReturnT = Readonly<{
	children: React.ReactNode,
}>;

export default function RootLayout( { children }: RootLayoutReturnT ) {
	return (
		<html lang='en'>
		<body>
			{ children }
		</body>
		</html>
	);
}
