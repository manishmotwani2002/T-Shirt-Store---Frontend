import React, { useState, useEffect } from 'react';
import { API } from '../backend';
import '../styles.css';
import Base from './Base';
import Card from './card';
import { getProducts } from './helper/coreapicalls';

export default function Home() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);

	const loadAllProduct = () => {
		getProducts().then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setProducts(data);
			}
		});
	};

	useEffect(() => {
		loadAllProduct();
	}, []);

	return (
		<div>
			{/* <h1 className="text-white">Welcome to the upside down!!</h1> */}
			<Base title="Home Page" description="this the home page of the application">
				<div className="row text-center">
					<div className="row">
						{products.map((product, index) => {
							return (
								<div key={index} className="col-4 mb-4">
									<Card product={product} />
								</div>
							);
						})}
					</div>
				</div>
			</Base>
		</div>
	);
}
