import Link from 'next/link';
import {
	Menu,
	type MenuProps,
} from 'antd';
import {
	HomeOutlined,
	LoginOutlined,
	UserOutlined,
	DashboardOutlined,
	FileWordOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function navbarLinks( isLogin: boolean, isAdmin: boolean ): MenuItem[] {
	const loginLinks: MenuItem[] = [
		{
			label: <Link href='/profile' className='text-decoration-none'>Profile</Link>,
			key: 'Profile',
			icon: <UserOutlined />,
		},
	];
	const nonLoginLinks: MenuItem[] = [
		{
			label: <Link href='/login' className='text-decoration-none'>Login</Link>,
			key: 'Login',
			icon: <LoginOutlined />,
		},
	];
	const adminLinks: MenuItem[] = [
		{
			label: <Link href='/dashboard' className='text-decoration-none'>Dashbaord</Link>,
			key: 'Dashboard',
			icon: <DashboardOutlined />,
		},
	];

	const result: MenuItem[] = [];

	if ( isLogin && isAdmin ) {
		result.push( ...adminLinks );
	}
	if ( isLogin ) {
		result.push( ...loginLinks );
	}else {
		result.push( ...nonLoginLinks );
	}

	return result;
}

const menuItems: MenuItem[] = [
	{
		label: <Link href='/' className='text-decoration-none'>Home</Link>,
		key: 'Home',
		icon: <HomeOutlined />,
	},
	...navbarLinks( true /* User is Login */, true /* User is Admin */ ),
	{
		label: <Link href='/about' className='text-decoration-none'>about</Link>,
		key: 'About',
		icon: <FileWordOutlined />,
	},
];

export default function Navbar() {
	return (
	<>
		<Menu mode='horizontal' items={ menuItems } />
	</>
	);
}
