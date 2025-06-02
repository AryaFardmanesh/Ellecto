'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useState, useMemo, createContext } from 'react';
import {
	Card,
	notification,
} from 'antd';
import type { NotificationArgsProps } from 'antd';
import { colors } from '@/utils/colors';

type NotificationPlacement = NotificationArgsProps[ 'placement' ];

const Context = createContext({ name: 'Default' });

export default function Product() {
	const searchParams = useSearchParams();
	const pid = searchParams.get( 'pid' );

	if ( pid === null ) {
		window.history.back();
	}

	const totalProductCount = 10;
	const [ productCartsCount, setProductCartsCount ] = useState( 1 );

	const [ api, contextHolder ] = notification.useNotification();

	const openNotification = ( title: string, description: string ) => {
		const placement: NotificationPlacement = 'bottomRight';
		api.info( {
			message: title,
			description: description,
			placement,
		} );
	};

	const contextValue = useMemo(() => ( { name: 'Product Notification' } ), [] );

	return (
	<Context.Provider value={ contextValue }>
	{ contextHolder }
	<div className="container my-5">
		<Card title="Product">
			<div className='row'>
				<div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
					<Image
						src={ `/slider/p-${ pid }.jpg` }
						width={ 250 }
						height={ 250 }
						alt='Product Image'
						style={{
							width: 250,
							height: 250,
							borderRadius: '6px',
						}}
					/>
				</div>
				<div className="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9 mt-1 mt-md-0 d-flex flex-column">
					<span className='fs-2 d-block'>Cup</span>
					<p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

					<div>
						<span>Price: </span>
						<span className="badge" style={{ background: colors.primary }}>$18.99</span>
					</div>
					<div>
						<span>Quantity in stock: </span>
						<span className="badge" style={{ background: colors.primary }}>{ totalProductCount }</span>
					</div>
					<div className='d-flex gap-3 align-items-center'>
						<div>
							<span>Your order quantity: </span>
							<span className="badge" style={{ background: colors.primary }}>{ productCartsCount }</span>
						</div>
						<div className='d-flex gap-1'>
							<button
							className='btn'
							onClick={ () => {
								if ( ( productCartsCount + 1 ) > totalProductCount ) {
									openNotification( 'Invalid Product Count', 'The number of items you request cannot exceed the number of items available in stock.' );
									return;
								}
								setProductCartsCount( productCartsCount + 1 );
							} }
							style={{
								padding: 2,
								background: colors.primary,
								color: 'white',
								fontSize: 11,
							}}
							>Inc</button>|
							<button
								className='btn'
								onClick={ () => {
									if ( ( productCartsCount - 1 ) < 1 ) {
										openNotification( 'Invalid Product Count', 'The number of items you request cannot be less than 1.' );
										return;
									}
									setProductCartsCount( productCartsCount - 1 );
								} }
								style={{
									padding: 2,
									background: colors.primary,
									color: 'white',
									fontSize: 11,
								}}
							>Dec</button>
						</div>
					</div>

					<div className='mt-3 mt-md-auto d-flex gap-1'>
						<button className="btn btn-sm w-100" style={{ background: colors.primary, color: 'white' }}>Add To Carts</button>
						<button className="btn btn-sm w-100 " style={{ background: colors.primary, color: 'white' }}>Purchase | $18.99</button>
					</div>
				</div>
			</div>
		</Card>
	</div>
	</Context.Provider>
	);
}
