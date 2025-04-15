import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Menu from "./Menucard";
import Contact from "./Contact";
import Cards from "./Card";

const Pages = [
	{
		home: <Home />,
		about: <AboutUs />,
		menu: <Menu />,
		card: <Cards />,
		contact: <Contact />,
	},
];

export default Pages;
