'use client';

import Navbar from '@/components/navbar';
import colors from '@/utils/colors';
import { CSSProperties, useEffect, useState } from 'react';
import type { MenuProps, TableProps } from 'antd';
import {
	Menu,
	Table,
	Tag,
	Space,
	Statistic,
	Card,
	InputNumber,
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
	ArrowUpOutlined,
	ArrowDownOutlined,
	MoneyCollectOutlined,
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
			if ( _role == 'admin' )
				return 'geekblue';
			return 'green';
		} )() } key={ role }>{ role }</Tag>
		</>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: () => (
			<Space size="middle">
				<button className='btn btn-sm' style={{ background: colors.danger, color: 'white' }}>Ban</button>
				<button className='btn btn-sm' style={{ background: colors.danger, color: 'white' }}>Delete</button>
			</Space>
		),
	},
];

const accountsTableData: AccountsTableDataType[] = [
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

const ticketsData = [
	{
		title: 'There is some bug in ui.',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus blanditiis obcaecati perspiciatis reprehenderit ad.',
	},
	{
		title: 'There is some bug in product page.',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus blanditiis obcaecati perspiciatis reprehenderit ad.',
	},
	{
		title: 'How to delete my profile data?',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus blanditiis obcaecati perspiciatis reprehenderit ad.',
	},
	{
		title: 'I can not pay my carts, please help me.',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus blanditiis obcaecati perspiciatis reprehenderit ad.',
	},
	{
		title: 'I need some help to deposit.',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus blanditiis obcaecati perspiciatis reprehenderit ad.',
	},
	{
		title: 'I cannot remove my carts.',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus blanditiis obcaecati perspiciatis reprehenderit ad.',
	},
	{
		title: 'Why my old account was banned ?',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus blanditiis obcaecati perspiciatis reprehenderit ad.',
	},
	{
		title: 'How to pay some product ?',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus blanditiis obcaecati perspiciatis reprehenderit ad.',
	},
];

const teamData = [
	{
		title: 'Front-End',
		users: [
			{
				name: 'Arya Fardmanesh',
				username: '_admin',
				email: 'AryaFardmanesh.1383@gmail.com',
			},
		]
	},
	{
		title: 'Back-End',
		users: [
			{
				name: 'Joe Black',
				username: 'joeblack',
				email: 'joeblack@gmail.com',
			},
			{
				name: 'Jone Doe',
				username: 'jonedoe',
				email: 'jonedoe@gmail.com',
			},
		]
	},
	{
		title: 'Product Manager',
		users: [
			{
				name: 'Joe Black',
				username: 'joeblack',
				email: 'joeblack@gmail.com',
			},
			{
				name: 'Jone Doe',
				username: 'jonedoe',
				email: 'jonedoe@gmail.com',
			},
		]
	},
];

function AccountsPage(): React.ReactNode {
	return (
	<>
		<span className='fs-1 d-block mb-3'>List Of All Users:</span>

		<Table<AccountsTableDataType> columns={ columns } dataSource={ accountsTableData } pagination={ false } />
	</>
	);
}

function BalancePage(): React.ReactNode {
	return (
	<>
		<div className='container-fluid'>
			<div className="row gap-2">
				<Card className='col'>
					<Statistic
						title="Sales"
						value={ 11.28 }
						precision={ 2 }
						valueStyle={{ color: '#3f8600' }}
						prefix={ <ArrowUpOutlined /> }
						suffix="%"
					/>
				</Card>
				<Card className='col'>
					<Statistic
						title="Incoming Per Years (USD)"
						value={ 100_000 }
						precision={ 2 }
						valueStyle={{ color: '#3f8600' }}
						prefix={ <MoneyCollectOutlined /> }
						suffix="$"
					/>
				</Card>
				<Card className='col'>
					<Statistic
						title="Stock"
						value={ -1.09 }
						precision={ 2 }
						valueStyle={{ color: '#cf1322' }}
						prefix={ <ArrowDownOutlined /> }
						suffix="%"
					/>
				</Card>
			</div>
			<div className="mt-2">
				<div className="row">
					<button className='btn' style={{ background: colors.primary, color: 'white' }}>Extract Now</button>
					<button className='btn mt-1' style={{ background: colors.primary, color: 'white' }}>Send Report To Managers</button>
				</div>
			</div>
		</div>
	</>
	);
}

function TicketsPage(): React.ReactNode {
	function createAccordion(
		titleContent: React.ReactNode | string,
		bodyContent: React.ReactNode | string,
		key: number
	): React.ReactNode {
		return (
		<div key={ key } className="accordion-item">
			<h2 className="accordion-header">
				<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={ `#collapse-${ key }` } aria-expanded="true" aria-controls={ `collapse-${ key }` }>
					{ titleContent }
				</button>
			</h2>

			<div id={ `collapse-${ key }` } className="accordion-collapse collapse" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<div>
						{ bodyContent }
					</div>
					<div className='row mt-2'>
						<button className='btn btn-sm' style={{ background: colors.primary, color: 'white' }}>Solved</button>
						<button className='btn btn-sm mt-1' style={{ background: colors.primary, color: 'white' }}>Send Report to Managers</button>
					</div>
				</div>
			</div>
		</div>
		);
	}

	return (
	<>
		<div className="accordion accordion-flush" id="accordionExample">
			<span className=''>All Send Tickets:</span>

			{ ticketsData.map( ( ticket, index ) => {
				return createAccordion( ticket.title, ticket.description, index );
			} ) }
		</div>
	</>
	);
}

function GlobalPage(): React.ReactNode {
	return (
	<div className='container-fluid'>
		<span className="fs-4 mb-3 d-block">Global Setting</span>

		<Card title="Deposit Limit">
			<label htmlFor='max-limit-deposit-input' className='d-block mb-0'>Enter the maximum amount the user can deposit:</label>
			<InputNumber addonBefore="USD" defaultValue={ 100_000_000 } id='max-limit-deposit-input' />
			<br />
			<br />
			<label htmlFor='min-limit-deposit-input' className='d-block mb-0'>Enter the minimum amount the user can deposit:</label>
			<InputNumber addonBefore="USD" defaultValue={ 0.50 } precision={ 2 } id='min-limit-deposit-input' />
		</Card>
	</div>
	);
}

function TeamsPage(): React.ReactNode {
	return (
	<>
		<span className="fs-4 mb-3 d-block">Teams</span>

		{
			teamData.map( ( team, index ) => {
				return <Card key={ index } className='mt-2' title={ team.title }>
					<table className='table table-striped'>
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Username</th>
								<th scope="col">Email</th>
							</tr>
						</thead>
						<tbody>
						{ team.users.map( ( user, index ) => {
							return (
								<tr key={ index }>
									<th>{ user.name }</th>
									<th>{ user.username }</th>
									<th>{ user.email }</th>
								</tr>
							);
						} ) }
						</tbody>
					</table>
				</Card>
			} )
		}
	</>
	);
}

function ReadmePage(): React.ReactNode {
	return (
	<pre style={{ textWrap: 'wrap' }}>
# 🛒 Ellecto Website Front-End<br />

This is a front-end project for a shopping website built using **Next.js** with **TypeScript**. The goal of this project is to practice and demonstrate modern front-end development skills with a focus on component-driven development and UI/UX design.<br />

## ✨ Features<br />

- ⚡️ Fast and optimized with Next.js<br />
- 🔒 Type-safe with TypeScript<br />
- 🎨 Responsive UI using Bootstrap<br />
- 🧩 Rich UI components from Ant Design<br />
- 🧱 Modular and scalable architecture<br />
- 💡 Ideal as a boilerplate for e-commerce projects<br />

## 🧰 Tech Stack<br />

- [Next.js](https://nextjs.org/) – React framework for server-side rendering and static site generation<br />
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript at scale<br />
- [Bootstrap](https://getbootstrap.com/) – CSS framework for responsive design<br />
- [Ant Design](https://ant.design/) – Enterprise-class UI design language and React-based implementation<br />

## 📦 Getting Started<br />

To run this project locally, follow these steps:<br />

### Prerequisites<br />

- Node.js (v16 or later)<br />
- npm<br />

### Installation<br />

```bash<br />
# Clone the repository<br />
git clone https://github.com/AryaFardmanesh/Ellecto.git<br />

# Navigate into the project directory<br />
cd ellecto<br />

# Install dependencies<br />
npm install<br />
```<br />

### Development Server<br />

```bash<br />
npm run dev<br />
```<br />

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.<br />

## 📄 License<br />

This project is licensed under the [MIT License](LICENSE).<br />

---<br />

Feel free to contribute or fork this repository for your own learning or development needs. Happy coding! 🚀<br />
	</pre>
	);
}

function LicencePage(): React.ReactNode {
	return (
	<pre className='text-center'>
				MIT License <br />

		Copyright (c) 2025 Arya Fardmanesh<br />

		Permission is hereby granted, free of charge, to any person obtaining a copy<br />
		of this software and associated documentation files (the Software), to deal<br />
		in the Software without restriction, including without limitation the rights<br />
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br />
		copies of the Software, and to permit persons to whom the Software is<br />
		furnished to do so, subject to the following conditions:<br />

		The above copyright notice and this permission notice shall be included in all<br />
		copies or substantial portions of the Software.<br />

		THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br />
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br />
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br />
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br />
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br />
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE<br />
		SOFTWARE.<br />
	</pre>
	);
}

export default function Dashboard() {
	useEffect( () => {
		require( "bootstrap/dist/js/bootstrap.bundle.min.js" );
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
