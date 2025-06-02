'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import colors from '@/utils/colors';
import Image from 'next/image';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CSSProperties, useState } from 'react';
import {
	Card,
	Input,
	Row,
	Statistic,
} from 'antd';
import {
	UserOutlined,
	MailOutlined,
	AccountBookOutlined,
	EditOutlined,
} from '@ant-design/icons';

const stylesheet: { [key: string]: CSSProperties } = {
	avatarContainer: {
		width: 50,
		height: 50,
		border: `2px solid ${ colors.primary }`,
		borderRadius: '50%',
		boxShadow: `0px 0px 1px 2px ${ colors.primary }`,
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cartProduct: {
		boxSizing: 'border-box',
		padding: 6,
		border: '1px solid #f0f0f0',
		borderRadius: 6
	},
	cartProductSlider: {
		width: '100%',
		overflowX: 'auto',
		flexWrap: 'nowrap',
		gap: '8px',
	},
	cartProductSliderImage: {
		width: 200,
		height: 200,
		borderRadius: 6,
	},
};

const profileFormSchema = Yup.object( {
	username: Yup.string().min( 6 ).max( 32 ),
	email: Yup.string().min( 11 ).max( 320 ),
	fname: Yup.string().min( 3 ).max( 120 ),
	lname: Yup.string().min( 3 ).max( 120 ),
} );

const ticketFormSchema = Yup.object( {
	title: Yup.string().min( 1 ).max( 320 ).required(),
	email: Yup.string().min( 1 ).max( 2048 ).required(),
} );

function createProductCard(
	name: string,
	image: string,
	price: string | number,
	key: string | number
): React.ReactNode {
	return (
	<div key={ key } style={ stylesheet.cartProduct } className='d-flex flex-column justify-content-between'>
		<Image
			src={ image }
			alt='Product image for slider.'
			width={ 200 }
			height={ 200 }
			style={ stylesheet.cartProductSliderImage }
		/>
		<span className='text-center my-1 mt-2'>{ name }</span>
		<span className='badge w-25' style={{ margin: '0 auto', background: colors.primary, color: 'white' }}>${ price }</span>
		<Link href={ `/product?pid=${ key }` } style={{ background: colors.primary, color: 'white' }} className='btn btn-sm mt-2'>See</Link>
		<button style={{ background: colors.danger, color: 'white' }} className='btn btn-sm mt-1'>Remove</button>
	</div>
	);
}

const cartProducts = [
	{
		name: 'Cup',
		image: '/slider/p-1.jpg',
		price: 18.99,
	},
	{
		name: 'Sky Blue Cup',
		image: '/slider/p-2.jpg',
		price: 19,
	},
	{
		name: 'Mobile',
		image: '/slider/p-3.jpg',
		price: 699.99,
	},
];

export default function Profile() {
	const totalCartPrice = cartProducts.map( product => {
		return product.price;
	} ).reduce( ( value, current ) => value + current );

	const [ fullName, setFullName ] = useState( 'Arya Fardmanesh' );
	const [ cartPrice, setCartPrice ] = useState<number>( totalCartPrice );
	const [ accountBalance, setAccountBalance ] = useState<number>( 118 );

	return (
	<>
		<Navbar />

		<div className="container mt-5">
			<Card title='Profile'>
				<div className="container">

					<div className="d-flex align-items-center">
						<div style={ stylesheet.avatarContainer }>
							<Image
								src='/avatars/default.png'
								width={ 60 }
								height={ 60 }
								alt='Avatar Image'
								style={{ borderRadius: '50%' }}
							/>
						</div>
						<div className='mx-3 d-flex align-items-center'>
							<span className='fs-5'>{ fullName }</span>
							<span className='mx-2 badge' style={{ background: colors.primary }}>Admin</span>
						</div>
					</div>

					<div className="mt-4">
						<Card title="Edit You'r Profile">
							<div className="container-fluid">
								<Formik
									initialValues={{
										fname: 'Arya',
										lname: 'Fardmanesh',
										username: '_admin',
										email: 'admin@gmail.com',
									}}
									validationSchema={ profileFormSchema }
									onSubmit={ ( values ) => {
										console.log( values );
										setFullName( values.fname + ' ' + values.lname );
									} }
								>
									{ ( {
										touched,
										errors,
										values,
										handleSubmit,
										handleChange,
										handleBlur
									} ) => (
										<form onSubmit={ handleSubmit } autoComplete='off' spellCheck='false'>
											<div className='row'>
												<div className='col-12 col-md-6 col-lg-3 mt-lg-0 mt-sm-2 form-group'>
													<label htmlFor='username-input'>Username:</label>
													<Input
														placeholder='Enter username'
														prefix={ <UserOutlined /> }
														id='username-input'
														name='username'
														onChange={ handleChange }
														onBlur={ handleBlur }
														value={ values.username }
														required
													/>
													{ touched.username ? <small style={{ color: colors.danger }}>{ errors.username }</small> : null }
												</div>
												<div className='col-12 col-md-6 col-lg-3 mt-lg-0 mt-sm-2 form-group'>
													<label htmlFor='email-input'>Email:</label>
													<Input
														type='email'
														placeholder='Enter email'
														prefix={ <MailOutlined /> }
														id='email-input'
														name='email'
														onChange={ handleChange }
														onBlur={ handleBlur }
														value={ values.email }
														required
													/>
													{ touched.email ? <small style={{ color: colors.danger }}>{ errors.email }</small> : null }
												</div>
												<div className='col-12 col-md-6 col-lg-3 mt-lg-0 mt-sm-2 form-group'>
													<label htmlFor='fname-input'>First Name:</label>
													<Input
														placeholder='Enter fname'
														prefix={ <AccountBookOutlined /> }
														id='fname-input'
														name='fname'
														onChange={ handleChange }
														onBlur={ handleBlur }
														value={ values.fname }
														required
													/>
													{ touched.fname ? <small style={{ color: colors.danger }}>{ errors.fname }</small> : null }
												</div>
												<div className='col-12 col-md-6 col-lg-3 mt-lg-0 mt-sm-2 form-group'>
													<label htmlFor='lname-input'>Last Name:</label>
													<Input
														placeholder='Enter lname'
														prefix={ <AccountBookOutlined /> }
														id='lname-input'
														name='lname'
														onChange={ handleChange }
														onBlur={ handleBlur }
														value={ values.lname }
														required
													/>
													{ touched.lname ? <small style={{ color: colors.danger }}>{ errors.lname }</small> : null }
												</div>
											</div>
											<button className="btn btn-sm w-100 mt-3" type='submit' style={{ background: colors.primary, color: 'white' }}>Update</button>
										</form>
									) }
								</Formik>
							</div>
						</Card>
					</div>

					<div className="mt-4">
						<Card title="Wallet">
							<Statistic title="Account Balance (USD)" value={ '$' + accountBalance } precision={ 2 } />
							<button className='btn btn-sm mt-3 w-100' style={{ background: colors.primary, color: 'white' }}>Deposit Now</button>
							<button className='btn btn-sm mt-1 w-100' style={{ background: colors.primary, color: 'white' }}>Extract Now</button>
						</Card>
					</div>

					<div className="mt-4">
						<Card title={ `Cart - Total: $${ cartPrice }` }>
							<Row style={ stylesheet.cartProductSlider }>
								{ cartProducts.map( ( product, index ) => {
									return createProductCard(
										product.name,
										product.image,
										product.price,
										index
									);
								} ) }
							</Row>
							<button className="btn btn-sm w-100 mt-3" style={{ background: colors.primary, color: 'white' }}>Pay</button>
							<button className="btn btn-sm w-100 mt-1" style={{ background: colors.danger, color: 'white' }}>Remove Cart</button>
						</Card>
					</div>

					<div className="mt-4">
						<Card title="Send Ticket To Support (Report)">
							<div className="container-fluid">
								<Formik
									initialValues={{
										title: '',
										description: '',
									}}
									validationSchema={ ticketFormSchema }
									onSubmit={ ( values ) => {
										console.log( values );
									} }
								>
									{ ( {
										touched,
										errors,
										values,
										handleSubmit,
										handleChange,
										handleBlur
									} ) => (
										<form onSubmit={ handleSubmit } autoComplete='off' spellCheck='false'>
											<div className='form-group'>
												<label htmlFor='title-input'>Title:</label>
												<Input
													placeholder='Enter title'
													prefix={ <EditOutlined /> }
													id='title-input'
													name='title'
													onChange={ handleChange }
													onBlur={ handleBlur }
													value={ values.title }
													required
												/>
												{ touched.title ? <small style={{ color: colors.danger }}>{ errors.title }</small> : null }
											</div>
											<div className='form-group mt-2'>
												<label htmlFor='description-input'>Description:</label>
												<Input.TextArea
													rows={ 6 }
													placeholder='Enter description'
													id='description-input'
													name='description'
													onChange={ handleChange }
													onBlur={ handleBlur }
													value={ values.description }
													required
												/>
												{ touched.description ? <small style={{ color: colors.danger }}>{ errors.description }</small> : null }
											</div>
											<button className="btn btn-sm w-100 mt-2" type='submit' style={{ background: colors.primary, color: 'white' }}>Send</button>
										</form>
									) }
								</Formik>
							</div>
						</Card>
					</div>

				</div>
			</Card>
		</div>

		<Footer />
	</>
	);
}
