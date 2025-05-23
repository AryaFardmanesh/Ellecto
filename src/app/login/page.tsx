'use client';

import {
	CSSProperties,
	useState,
} from 'react';
import {
	Card,
	Input,
	Button
} from 'antd';
import {
	UserOutlined,
	KeyOutlined,
	EyeOutlined,
	EyeInvisibleOutlined,
} from '@ant-design/icons';
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
};

export default function Login() {
	const [ showPassword, setShowPassword ] = useState( false );

	const togglePasswordIcon = () => {
		setShowPassword( prev => !prev );
	};

	return (
	<div className='container d-flex align-items-center justify-content-center' style={ stylesheet.container }>
		<Card title='Ellecto Login' variant='borderless' style={ stylesheet.card }>
			<form autoComplete='off'>
				<div className='form-group'>
					<label htmlFor='username-input'>Enter your username:</label>
					<Input
						placeholder='Enter username'
						prefix={ <UserOutlined /> }
						id='username-input'
					/>
					{/* <small style={{ color: colors.danger }}>We'll never share your email with anyone else.</small> */}
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
					/>
					{/* <small style={{ color: colors.danger }}>We'll never share your email with anyone else.</small> */}
				</div>
				<Button htmlType='button' type='primary' style={{ background: colors.primary }} className='mt-3' block>Login</Button>
			</form>
		</Card>
	</div>
	);
}
