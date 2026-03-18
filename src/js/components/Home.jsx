import React from "react";

//include images into your bundle

import Navbar from "./Navbar.jsx";
import MainCard from "./MainCard.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {

	const pilares = [
		{ nombre: "Perceivable", imagen: "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Users must be able to perceive the information presented.Content should be visible or accessible through multiple senses (e.g., text alternatives, captions, proper contrast)." },
		{ nombre: "Operable", imagen: "https://images.unsplash.com/photo-1619462572322-a28a773cbed5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Users must be able to interact with the interface. Navigation and functionality should work for everyone, including keyboard-only users." },
		{ nombre: "Understandable", imagen: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Users must be able to understand both the content and how the interface works. Clear language and predictable behavior are key." },
		{ nombre: "Robust", imagen: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Content must work reliably across different devices, browsers, and assistive technologies. Clean, semantic code ensures long-term compatibility." }
	]

	return (
		<div>
			<Navbar />
			<div className="container mt-5">
				<MainCard />
			</div>
			<div className="container mt-5 mb-3">
				<div className="row g-4">
					{pilares.map((item, index) => (
						<div key={index} className="col-12 col-sm-6 col-lg-3 mb-4 d-flex">
							<Cards
								nombre={item.nombre}
								descripcion={item.descripcion}
								imagen={item.imagen}
							/>
						</div>
					))}
				</div>
			</div>
			<Footer />

			
		</div>
				);
				
};

				export default Home;