'use client';

import { useState } from 'react';
import {
	Card,
	Input,
} from 'antd';
import {
	UserOutlined,
	KeyOutlined,
	EyeOutlined,
	EyeInvisibleOutlined,
} from '@ant-design/icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import colors from '@/utils/colors';
import stylesheet from '@/styles/login';

const formSchema = Yup.object( {
	username: Yup.string().min( 6 ).max( 32 ),
	password: Yup.string().min( 6 ).max( 32 ),
} );

export default function Login() {
	const [ showPassword, setShowPassword ] = useState( false );

	const togglePasswordIcon = () => {
		setShowPassword( prev => !prev );
	};

	return (
	<div className='container d-flex align-items-center justify-content-center' style={ stylesheet.container }>
		<Card title='Ellecto Login' variant='borderless' style={ stylesheet.card }>
			<Formik
				initialValues={{
					username: '',
					password: ''
				}}
				validationSchema={ formSchema }
				onSubmit={ ( values, action ) => {
					console.log( values );
					action.resetForm();
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
						<label htmlFor='username-input'>Enter your username:</label>
						<Input
							placeholder='Enter username'
							prefix={ <UserOutlined /> }
							id='username-input'
							name='username'
							onChange={ handleChange }
							onBlur={ handleBlur }
							value={ values.username }
						/>
						{ touched.username ? <small style={{ color: colors.danger }}>{ errors.username }</small> : null }
					</div>
					<div className='form-group mt-3'>
						<label htmlFor='password-input'>Enter your password:</label>
						<Input
							type={ showPassword ? 'text' : 'password' }
							placeholder='Enter password'
							prefix={ <KeyOutlined /> }
							suffix={
								showPassword ? (
									<EyeInvisibleOutlined onClick={togglePasswordIcon} />
								) : (
									<EyeOutlined onClick={togglePasswordIcon} />
								)
							}
							id='password-input'
							name='password'
							onChange={ handleChange }
							onBlur={ handleBlur }
							value={ values.password }
						/>
						{ touched.password ? <small style={{ color: colors.danger }}>{ errors.password }</small> : null }
					</div>
					<button style={ stylesheet.submitBtn } className='mt-3'>Login</button>
					</form>
				) }
				</Formik>
		</Card>
	</div>
	);
}
