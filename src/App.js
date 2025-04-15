import React from "react";
import Mainlayout from "./layout/Mainlayout";
import { Container } from "@mui/material";
import Pages from "./Component/index";

const App = () => {
	return (
		<Mainlayout>
			<Container maxWidth="lg">
				{Object.keys(Pages[0]).map((pageKey, i) => (
					<div id={pageKey} key={i}>
						{Pages[0][pageKey]}
					</div>
				))}
			</Container>
		</Mainlayout>
	);
};

export default App;