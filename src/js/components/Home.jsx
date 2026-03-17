import React from "react";

//include images into your bundle

import Navbar from "./Navbar.jsx";
import MainCard from "./MainCard.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {

	const pilares = [
		{ nombre: "Perceivable", descripcion: "Users must be able to perceive the information presented.Content should be visible or accessible through multiple senses (e.g., text alternatives, captions, proper contrast)." },
		{ nombre: "Operable", descripcion: "Users must be able to interact with the interface. Navigation and functionality should work for everyone, including keyboard-only users." },
		{ nombre: "Understandable", descripcion: "Users must be able to understand both the content and how the interface works. Clear language and predictable behavior are key." },
		{ nombre: "Robust", descripcion: "Content must work reliably across different devices, browsers, and assistive technologies. Clean, semantic code ensures long-term compatibility." }
	]

	return (
		<div>
			<Navbar />
			<MainCard />
			{pilares.map((item, index) => (
				<Cards
				    key={index} 
					nombre={item.nombre}
					descripcion={item.descripcion} 
				 />
			))}
			<Footer />
			
		</div>
	);
};

export default Home;