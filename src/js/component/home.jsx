import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let contadorSegundo = setInterval(() => {
			setCount(count + 1)
		}, 1000)
		return () => {
			clearInterval(contadorSegundo)
		}
	}, [count])

	const segundos = count.toString().padStart(6, '0').split('');

	return (
		<div className="p-3 mb-2 bg-dark" style={{ display: 'flex', justifyContent: 'space-around', marginTop: "0.5rem", fontSize: "4rem", fontFamily: "serif" }}>
			<div className="card text-white bg-dark" style={{ background: "", }}>
				<div className="card-body">
					<a><i class="fa-regular fa-clock"></i></a>
				</div>
			</div>
			{segundos.map((digito, index) => (
				<div key={index}>
					<div className="card text-white bg-dark">
						<div className="card-body">
							{digito}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
