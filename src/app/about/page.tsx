'use client';

import React from 'react';
import { Typography } from 'antd';
import {
	GithubOutlined,
	MailOutlined
} from '@ant-design/icons';
import Navbar from "@/components/navbar";

const { Title, Paragraph, Link } = Typography;

export default function About() {
	return (
	<>
		<Navbar />

		<div className="container my-3">
			<Typography>
				<Title>About Ellecto</Title>

				<Paragraph style={{ textAlign: 'justify' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officia quis amet quidem enim velit mollitia nemo sapiente, quasi, debitis ratione ducimus cum reiciendis doloremque error delectus eos minus vero veniam illum facere? Temporibus delectus deserunt quia quo quasi, vero sequi? Aliquid, ea sint! Iure sit debitis maxime, ipsum deserunt consequatur, itaque velit odio quis error exercitationem quisquam asperiores at unde? Praesentium quaerat assumenda, ex pariatur iste facere illum tempore rerum quia accusantium inventore maxime dignissimos animi vel ipsa veritatis! Impedit facere perferendis qui debitis eveniet animi dignissimos sit consequatur corrupti reiciendis natus possimus eaque molestias, dolor officia inventore fugiat quas soluta officiis. Excepturi praesentium eaque quas, sequi quasi laboriosam asperiores ea adipisci corporis velit debitis? Ipsa recusandae cum suscipit molestiae aut sint earum sequi! Corrupti nulla omnis consequuntur, hic accusantium ipsa et libero repellat maiores laboriosam aperiam dolorum! Assumenda iusto, aliquid recusandae quisquam officia itaque maiores doloribus fugiat eum provident nam! Porro itaque, magni saepe temporibus architecto repellat voluptatibus praesentium commodi cumque accusamus exercitationem dolor unde officiis quas ipsam nihil modi voluptate perferendis dolorum! Sint ducimus cum ullam ipsam porro amet similique perferendis minus accusamus consequuntur quisquam animi nobis minima, dolor atque ratione sequi! Obcaecati voluptatem culpa natus optio molestiae tempore, sit similique commodi, nostrum corporis maxime enim. Voluptates inventore velit eum blanditiis sint. Blanditiis magni natus odio dicta rerum perspiciatis fuga fugit possimus magnam rem illo officiis ut sunt cupiditate, aut inventore tempore repellendus voluptatum quod earum. Assumenda reprehenderit expedita soluta aliquam rem, aperiam blanditiis quo distinctio dolorum iure iste commodi facere accusamus obcaecati!
				</Paragraph>

				<Paragraph style={{ textAlign: 'justify' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officia quis amet quidem enim velit mollitia nemo sapiente, quasi, debitis ratione ducimus cum reiciendis doloremque error delectus eos minus vero veniam illum facere? Temporibus delectus deserunt quia quo quasi, vero sequi? Aliquid, ea sint! Iure sit debitis maxime, ipsum deserunt consequatur, itaque velit odio quis error exercitationem quisquam asperiores at unde? Praesentium quaerat assumenda, ex pariatur iste facere illum tempore rerum quia accusantium inventore maxime dignissimos animi vel ipsa veritatis! Impedit facere perferendis qui debitis eveniet animi dignissimos sit consequatur corrupti reiciendis natus possimus eaque molestias, dolor officia inventore fugiat quas soluta officiis. Excepturi praesentium eaque quas, sequi quasi laboriosam asperiores ea adipisci corporis velit debitis? Ipsa recusandae cum suscipit molestiae aut sint earum sequi! Corrupti nulla omnis consequuntur, hic accusantium ipsa et libero repellat maiores laboriosam aperiam dolorum! Assumenda iusto, aliquid recusandae quisquam officia itaque maiores doloribus fugiat eum provident nam! Porro itaque, magni saepe temporibus architecto repellat voluptatibus praesentium commodi cumque accusamus exercitationem dolor unde officiis quas ipsam nihil modi voluptate perferendis dolorum! Sint ducimus cum ullam ipsam porro amet similique perferendis minus accusamus consequuntur quisquam animi nobis minima, dolor atque ratione sequi! Obcaecati voluptatem culpa natus optio molestiae tempore, sit similique commodi, nostrum corporis maxime enim. Voluptates inventore velit eum blanditiis sint. Blanditiis magni natus odio dicta rerum perspiciatis fuga fugit possimus magnam rem illo officiis ut sunt cupiditate, aut inventore tempore repellendus voluptatum quod earum. Assumenda reprehenderit expedita soluta aliquam rem, aperiam blanditiis quo distinctio dolorum iure iste commodi facere accusamus obcaecati!
				</Paragraph>


				<Title>Creator</Title>

				<Paragraph style={{ textAlign: 'justify' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil nobis ipsam error, unde quas possimus quo modi illum voluptates praesentium facilis quam consequuntur eligendi nam. Facilis numquam sed optio adipisci nam reprehenderit quos consectetur assumenda rerum soluta quidem ipsum mollitia, eveniet officia sapiente! Voluptas ullam optio rerum nostrum eos aliquam molestias consequuntur ratione voluptates dolorum, incidunt fugiat. Perferendis voluptates vitae optio ipsa temporibus nihil, officiis amet nisi, expedita ducimus quam qui inventore obcaecati laboriosam natus dolore aperiam consequuntur magni voluptatem aliquid sequi, illum deleniti asperiores voluptatibus? Harum, error consectetur sunt eaque ad aspernatur labore facere.
				</Paragraph>


				<Title>Social Media</Title>

				<Paragraph style={{ textAlign: 'justify' }}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates itaque tempore ex expedita minima odit quidem deleniti dolore molestias aspernatur, ipsum error dolorem quis amet similique.
				</Paragraph>

				<div className="d-flex gap-3">
					<Link href='https://github.com/AryaFardmanesh/ellecto/'><GithubOutlined style={{ fontSize: 24 }} /></Link>
					<Link href='mailto:AryaFardmanesh.1383@gmail.com'><MailOutlined style={{ fontSize: 24 }} /></Link>
				</div>
			</Typography>
		</div>
	</>
	);
}
