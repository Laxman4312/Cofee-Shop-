import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";

const Mainlayout = ({ children }) => {
	const [activeTab, setActiveTab] = useState("Home");

	const handleScroll = () => {
		const sections = ["home", "about", "menu", "card", "contact"];
		const currentSection = sections.find((section) => {
			const element = document.getElementById(section);
			if (!element) return false; 
			const rect = element.getBoundingClientRect();
			return (
				rect.top <= window.innerHeight / 2 &&
				rect.bottom >= window.innerHeight / 2
			);
		});
		if (currentSection) {
			setActiveTab(
				currentSection.charAt(0).toUpperCase() + currentSection.slice(1)
			); 
		}
	};

	useEffect(() => {
	
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Navbar activeTab={activeTab} />
			{children}
		</>
	);
};

export default Mainlayout;
