import { CSSProperties } from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import Navbar from '@/components/navbar';

const stylesheet: { [key: string]: CSSProperties } = {
	carousel: {
		height: '500px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
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
	</>
	);
}
