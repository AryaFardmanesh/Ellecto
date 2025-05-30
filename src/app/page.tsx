'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { Carousel, Typography, Card, Col, Row } from 'antd';
import Navbar from '@/components/navbar';
import colors from '@/utils/colors';
import './home.css';

const { Title } = Typography;

const stylesheet: { [key: string]: CSSProperties } = {
	carousel: {
		height: '500px',
	},
	containerSlider: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	sliderImage: {
		width: '100%',
		height: '500px',
	},
	cardProductSlider: {
		width: '100%',
		overflowX: 'auto',
		flexWrap: 'nowrap',
		gap: '8px',
	},
	cardProductSliderCard: {
		minWidth: '210px',
		height: '200px',
		padding: '10px'
	},
	cardProductSliderImage: {
		width: '100%',
		height: '145px',
		borderRadius: 6,
	},
	cardProductSliderLink: {
		background: colors.primary,
		marginTop: 5,
		color: 'white'
	},
	cardProductMain: {
		minWidth: '210px',
		height: '260px',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
};

const internalConfig = {
	sliderImage: {
		width: 2000,
		height: 500,
	}
};

function ProductCardRowSlider(
	image: string,
	key: number | string
): React.ReactNode {
	return (
	<Card style={ stylesheet.cardProductSliderCard } className='card-no-padding'>
		<div className='d-flex flex-column justify-content-between'>
			<Image
				src={ image }
				alt='Product image for slider.'
				width={ internalConfig.sliderImage.width }
				height={ internalConfig.sliderImage.height }
				style={ stylesheet.cardProductSliderImage }
			/>
			<Link href={ `/product?pid=${ key }` } style={ stylesheet.cardProductSliderLink } className='btn btn-sm'>See</Link>
		</div>
	</Card>
	);
}

function ProductCardMain(
	image: string,
	name: string,
	price: number | string,
	key: number | string
): React.ReactNode {
	return (
	<Card className='card-no-padding'>
		<div style={ stylesheet.cardProductMain }>
			<Image
				src={ image }
				alt='Product image for slider.'
				width={ internalConfig.sliderImage.width }
				height={ internalConfig.sliderImage.height }
				style={ stylesheet.cardProductSliderImage }
			/>
			<span className='fs-5'>{ name }</span>
			<span className='badge' style={{ background: colors.primary }}>${ price }</span>
			<Link href={ `/product?pid=${ key }` } style={ stylesheet.cardProductSliderLink } className='btn btn-sm w-100'>See</Link>
		</div>
	</Card>
	);
}

const productsMain = [
	{
		image: '/slider/p-1.jpg',
		name: 'Cup',
		price: 18.99,
	},
	{
		image: '/slider/p-2.jpg',
		name: 'Blue Cup',
		price: 19.20,
	},
	{
		image: '/slider/p-3.jpg',
		name: 'Mobile',
		price: 699.99,
	},
	{
		image: '/slider/p-4.jpg',
		name: 'White Cup',
		price: 16.00,
	},
	{
		image: '/slider/p-5.jpg',
		name: 'IPhone X',
		price: 490.00,
	},
	{
		image: '/slider/p-6.jpg',
		name: 'IPhone X Black',
		price: 490.00,
	},
	{
		image: '/slider/p-7.jpg',
		name: 'Sky Blue Cup',
		price: 18.99,
	},
];

export default function Home() {
	return (
	<>
		<Navbar />

		<header>
			<Carousel arrows autoplay={{ dotDuration: true }} autoplaySpeed={ 4000 } style={ stylesheet.carousel }>
				<div style={ stylesheet.containerSlider }>
					<Image
						src='/slider/p-1.jpg'
						alt='Product image for slider.'
						width={ internalConfig.sliderImage.width }
						height={ internalConfig.sliderImage.height }
						style={ stylesheet.sliderImage }
					/>
				</div>
				<div style={ stylesheet.containerSlider }>
					<Image
						src='/slider/p-2.jpg'
						alt='Product image for slider.'
						width={ internalConfig.sliderImage.width }
						height={ internalConfig.sliderImage.height }
						style={ stylesheet.sliderImage }
					/>
				</div>
				<div style={ stylesheet.containerSlider }>
					<Image
						src='/slider/p-3.jpg'
						alt='Product image for slider.'
						width={ internalConfig.sliderImage.width }
						height={ internalConfig.sliderImage.height }
						style={ stylesheet.sliderImage }
					/>
				</div>
				<div style={ stylesheet.containerSlider }>
					<Image
						src='/slider/p-4.jpg'
						alt='Product image for slider.'
						width={ internalConfig.sliderImage.width }
						height={ internalConfig.sliderImage.height }
						style={ stylesheet.sliderImage }
					/>
				</div>
				<div style={ stylesheet.containerSlider }>
					<Image
						src='/slider/p-5.jpg'
						alt='Product image for slider.'
						width={ internalConfig.sliderImage.width }
						height={ internalConfig.sliderImage.height }
						style={ stylesheet.sliderImage }
					/>
				</div>
				<div style={ stylesheet.containerSlider }>
					<Image
						src='/slider/p-6.jpg'
						alt='Product image for slider.'
						width={ internalConfig.sliderImage.width }
						height={ internalConfig.sliderImage.height }
						style={ stylesheet.sliderImage }
					/>
				</div>
				<div style={ stylesheet.containerSlider }>
					<Image
						src='/slider/p-7.jpg'
						alt='Product image for slider.'
						width={ internalConfig.sliderImage.width }
						height={ internalConfig.sliderImage.height }
						style={ stylesheet.sliderImage }
					/>
				</div>
			</Carousel>
		</header>

		<div className="container my-4">
			<Title level={3}>Newest Products:</Title>

			<Card>
				<Row style={ stylesheet.cardProductSlider }>
					{ ProductCardRowSlider( '/slider/p-1.jpg', 1 ) }
					{ ProductCardRowSlider( '/slider/p-2.jpg', 2 ) }
					{ ProductCardRowSlider( '/slider/p-3.jpg', 3 ) }
					{ ProductCardRowSlider( '/slider/p-4.jpg', 4 ) }
					{ ProductCardRowSlider( '/slider/p-5.jpg', 5 ) }
					{ ProductCardRowSlider( '/slider/p-6.jpg', 6 ) }
					{ ProductCardRowSlider( '/slider/p-7.jpg', 7 ) }
				</Row>
			</Card>
		</div>

		<div className="container my-4">
			<div className="row g-3">
				{
					productsMain.map( ( value, index ) => {
						return (
							<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={ index }>
								{ ProductCardMain(
									value.image,
									value.name,
									value.price,
									index
								) }
							</div>
						);
					} )
				}
			</div>
		</div>
	</>
	);
}
