'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { Carousel, Typography, Card, Row } from 'antd';
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
		width: '210px',
		height: '145px',
		borderRadius: 6,
	},
	cardProductSliderLink: {
		background: colors.primary,
		marginTop: 5,
		color: 'white'
	},
};

const internalConfig = {
	sliderImage: {
		width: 2000,
		height: 500,
	}
};

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
					<Card style={ stylesheet.cardProductSliderCard } className='card-no-padding'>
						<div className='d-flex flex-column justify-content-between'>
							<Image
								src='/slider/p-1.jpg'
								alt='Product image for slider.'
								width={ internalConfig.sliderImage.width }
								height={ internalConfig.sliderImage.height }
								style={ stylesheet.cardProductSliderImage }
							/>
							<Link href='/product?pid=1' style={ stylesheet.cardProductSliderLink } className='btn btn-sm'>See</Link>
						</div>
					</Card>
					<Card style={ stylesheet.cardProductSliderCard } className='card-no-padding'>
						<div className='d-flex flex-column justify-content-between'>
							<Image
								src='/slider/p-2.jpg'
								alt='Product image for slider.'
								width={ internalConfig.sliderImage.width }
								height={ internalConfig.sliderImage.height }
								style={ stylesheet.cardProductSliderImage }
							/>
							<Link href='/product?pid=1' style={ stylesheet.cardProductSliderLink } className='btn btn-sm'>See</Link>
						</div>
					</Card>
					<Card style={ stylesheet.cardProductSliderCard } className='card-no-padding'>
						<div className='d-flex flex-column justify-content-between'>
							<Image
								src='/slider/p-3.jpg'
								alt='Product image for slider.'
								width={ internalConfig.sliderImage.width }
								height={ internalConfig.sliderImage.height }
								style={ stylesheet.cardProductSliderImage }
							/>
							<Link href='/product?pid=1' style={ stylesheet.cardProductSliderLink } className='btn btn-sm'>See</Link>
						</div>
					</Card>
					<Card style={ stylesheet.cardProductSliderCard } className='card-no-padding'>
						<div className='d-flex flex-column justify-content-between'>
							<Image
								src='/slider/p-4.jpg'
								alt='Product image for slider.'
								width={ internalConfig.sliderImage.width }
								height={ internalConfig.sliderImage.height }
								style={ stylesheet.cardProductSliderImage }
							/>
							<Link href='/product?pid=1' style={ stylesheet.cardProductSliderLink } className='btn btn-sm'>See</Link>
						</div>
					</Card>
					<Card style={ stylesheet.cardProductSliderCard } className='card-no-padding'>
						<div className='d-flex flex-column justify-content-between'>
							<Image
								src='/slider/p-5.jpg'
								alt='Product image for slider.'
								width={ internalConfig.sliderImage.width }
								height={ internalConfig.sliderImage.height }
								style={ stylesheet.cardProductSliderImage }
							/>
							<Link href='/product?pid=1' style={ stylesheet.cardProductSliderLink } className='btn btn-sm'>See</Link>
						</div>
					</Card>
					<Card style={ stylesheet.cardProductSliderCard } className='card-no-padding'>
						<div className='d-flex flex-column justify-content-between'>
							<Image
								src='/slider/p-6.jpg'
								alt='Product image for slider.'
								width={ internalConfig.sliderImage.width }
								height={ internalConfig.sliderImage.height }
								style={ stylesheet.cardProductSliderImage }
							/>
							<Link href='/product?pid=1' style={ stylesheet.cardProductSliderLink } className='btn btn-sm'>See</Link>
						</div>
					</Card>
					<Card style={ stylesheet.cardProductSliderCard } className='card-no-padding'>
						<div className='d-flex flex-column justify-content-between'>
							<Image
								src='/slider/p-7.jpg'
								alt='Product image for slider.'
								width={ internalConfig.sliderImage.width }
								height={ internalConfig.sliderImage.height }
								style={ stylesheet.cardProductSliderImage }
							/>
							<Link href='/product?pid=1' style={ stylesheet.cardProductSliderLink } className='btn btn-sm'>See</Link>
						</div>
					</Card>
				</Row>
			</Card>
		</div>
	</>
	);
}
