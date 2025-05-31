'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import colors from '@/utils/colors';
import Image from 'next/image';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CSSProperties, useEffect, useState } from 'react';
import type { MenuProps, TableProps } from 'antd';
import {
	Menu,
	Table,
	Tag,
	Space,
} from 'antd';
import {
	InfoCircleOutlined,
	UserOutlined,
	BankOutlined,
	MailOutlined,
	SettingOutlined,
	GlobalOutlined,
	FileWordOutlined,
	TeamOutlined,
	ReadOutlined,
	FileDoneOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>[ 'items' ][ number ];

const  menuItems: MenuItem[] = [
	{
		key: 'sub-1',
		label: 'Information',
		icon: <InfoCircleOutlined />,
		children: [
			{
				key: 'accounts',
				label: 'Accounts',
				icon: <UserOutlined />,
			},
			{
				key: 'balance',
				label: 'Balance',
				icon: <BankOutlined />,
			},
			{
				key: 'tickets',
				label: 'Tickets',
				icon: <MailOutlined />,
			},
		],
	},
	{
		key: 'sub-2',
		label: 'Setting',
		icon: <SettingOutlined />,
		children: [
			{
				key: 'global',
				label: 'Global',
				icon: <GlobalOutlined />,
			},
		],
	},
	{
		key: 'sub-3',
		label: 'Documentation',
		icon: <FileWordOutlined />,
		children: [
			{
				key: 'teams',
				label: 'Teams',
				icon: <TeamOutlined />,
			},
			{
				key: 'readme',
				label: 'README',
				icon: <ReadOutlined />,
			},
			{
				key: 'licence',
				label: 'Licence',
				icon: <FileDoneOutlined />,
			},
		],
	},
];

interface AccountsTableDataType {
	key: string;
	username: string;
	email: string;
	name: string;
	role: string;
}

const columns: TableProps<AccountsTableDataType>[ 'columns' ] = [
	{
		title: 'Username',
		dataIndex: 'username',
		key: 'username',
		render: ( text ) => <span>{ text }</span>,
	},
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: 'Full Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Role',
		key: 'role',
		dataIndex: 'role',
		render: ( _, { role } ) => (
		<>
		<Tag color={ ( () => {
			let _role = role.toLowerCase();
			if ( role == 'admin' )
				return 'geekblue';
			return 'green';
		} )() } key={ role }>{ role }</Tag>
		</>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: ( _, record ) => (
			<Space size="middle">
				<button className='btn btn-sm' style={{ background: colors.danger, color: 'white' }}>Ban</button>
				<button className='btn btn-sm' style={{ background: colors.danger, color: 'white' }}>Delete</button>
			</Space>
		),
	},
];

const data: AccountsTableDataType[] = [
	{
		key: '1',
		username: '_admin',
		email: 'admin@gmail.com',
		name: 'Arya Fardmanesh',
		role: 'admin',
	},
	{
		key: '2',
		username: 'johnbrown',
		email: 'johnbrown@gmail.com',
		name: 'John Brown',
		role: 'curstomer',
	},
	{
		key: '3',
		username: 'jimgreen',
		email: 'jimgreen@gmail.com',
		name: 'Jim Green',
		role: 'curstomer',
	},
	{
		key: '4',
		username: '_admin',
		email: 'admin@gmail.com',
		name: 'Arya Fardmanesh',
		role: 'curstomer',
	},
	{
		key: '5',
		username: 'joeblack',
		email: 'joeblack@gmail.com',
		name: 'Joe Black',
		role: 'curstomer',
	},
];

const stylesheet: { [key: string]: CSSProperties } = {};

const _FormSchema = Yup.object( {
	_: Yup.string().min( 0 ).max( 0 ),
} );

function AccountsPage(): React.ReactNode {
	return (
	<>
		<span className='fs-1 d-block mb-3'>List Of All Users:</span>

		<Table<AccountsTableDataType> columns={columns} dataSource={data} />
	</>
	);
}

function BalancePage(): React.ReactNode {
	return (
	<>Balance</>
	);
}

function TicketsPage(): React.ReactNode {
	return (
	<>Tickets</>
	);
}

function GlobalPage(): React.ReactNode {
	return (
	<>Global</>
	);
}

function TeamsPage(): React.ReactNode {
	return (
	<>Teams</>
	);
}

function ReadmePage(): React.ReactNode {
	return (
	<>Readme</>
	);
}

function LicencePage(): React.ReactNode {
	return (
	<>Licence</>
	);
}

export default function Dashboard() {
	useEffect(() => {
	  require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	const [ activePage, setActivePage ] = useState( 'Account' );

	function renderActivePage( active: string ): React.ReactNode {
		switch ( active ) {
			case 'accounts': return <AccountsPage />
			case 'balance': return <BalancePage />
			case 'tickets': return <TicketsPage />
			case 'global': return <GlobalPage />
			case 'teams': return <TeamsPage />
			case 'readme': return <ReadmePage />
			case 'licence': return <LicencePage />
			default: return <AccountsPage />;
		}
	}

	const menuOnClick: MenuProps[ 'onClick' ] = ( e ) => {
		const sectionId = e.key;
		setActivePage( sectionId );
	};

	return (
	<>
		<Navbar />

		<div style={{ display: 'flex' }}>
			<div>
				<div className="mx-2 navbar navbar-expand-md">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
						<Menu
							onClick={ menuOnClick }
							style={{ width: '100%', height: '100%' }}
							defaultSelectedKeys={ [ 'accounts' ] }
							defaultOpenKeys={ [ 'sub-1' ] }
							mode="inline"
							items={ menuItems }
						/>
					</div>
				</div>
			</div>

			<div className='container-fluid m-2'>
				{ renderActivePage( activePage ) }
			</div>
		</div>
	</>
	);
}
