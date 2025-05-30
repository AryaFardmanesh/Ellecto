import React from 'react';
import { Layout, Typography, Space } from 'antd';
import {
	FacebookOutlined,
	TwitterOutlined,
	InstagramOutlined,
	LinkedinOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter = () => {
	return (
	<Footer className="mt-5 py-4">
		<div className="container">
			<div className="row">
				<div className="col-md-4 mb-3">
					<h5>About Us</h5>
					<Text>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex vitae voluptate incidunt.
					</Text>
				</div>

				<div className="col-md-4 mb-3">
					<h5>Useful Links</h5>
					<ul className="list-unstyled">
					<li><Link href="/">Home</Link></li>
					<li><Link href="/about">About Us</Link></li>
					<li><Link href="contact/">Contact Us</Link></li>
					<li><Link href="faq/">FAQ</Link></li>
					</ul>
				</div>

				<div className="col-md-4 mb-3">
					<h5>Follow Us</h5>
					<Space size="middle">
						<Link href="#"><FacebookOutlined style={{ fontSize: '20px' }} /></Link>
						<Link href="#"><TwitterOutlined style={{ fontSize: '20px' }} /></Link>
						<Link href="#"><InstagramOutlined style={{ fontSize: '20px' }} /></Link>
						<Link href="#"><LinkedinOutlined style={{ fontSize: '20px' }} /></Link>
					</Space>
				</div>
			</div>

			{/* Bottom Line */}
			<div className="text-center mt-4">
			<Text className="text-secondary" type="secondary">
			© All Copyrights Reserved { new Date().getFullYear() }.
			</Text>
			</div>
		</div>
	</Footer>
	);
};

export default AppFooter;
