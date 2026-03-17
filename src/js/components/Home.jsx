import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import MainCard from "./MainCard.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {

	const pilares = [
		{pilar: "Perceivable", Descricion: "Users must be able to perceive the information presented. Content should be visible or accessible through multiple senses (e.g., text alternatives, captions, proper contrast)."}
		{pilar: "Operable", Descricion: "Users must be able to interact with the interface. Navigation and functionality should work for everyone, including keyboard-only users."}
		{pilar: "Perceivable", Descricion: "Users must be able to perceive the information presented. Content should be visible or accessible through multiple senses (e.g., text alternatives, captions, proper contrast)."}
		{pilar: "Perceivable", Descricion: "Users must be able to perceive the information presented. Content should be visible or accessible through multiple senses (e.g., text alternatives, captions, proper contrast)."}
	]
	return (
		<div>
			<Navbar />
			<MainCard />
			<Cards />
			<Footer />
			{pilares.map((item, index) => (
				<CardMenu
					key={index}
					nombre={item.nombre}
					descripcion={item.descripcion}
				/>
			))}
		</div>
	);
};

export default Home;