import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import OrderDialog from "./OrderDialog";
// import Header from "./Header";
// import img from '../assets/coffee.jpg';


const Cards = () => {
	const coffeeShops = [
		{
			id: 1,
			shopName: "Lukey Coffee Shop",
			coffeeName: "Black Coffee",
			description: "Welcome to coffee Shop",
			imagePath: "/loyality.png",
		},
		{
			id: 2,
			shopName: "Lukey Coffee Shop",
			coffeeName: "Espresso",
			description: "A rich and bold espresso",
			imagePath: "/coffe_logo.png",
		},
		{
			id: 3,
			shopName: "Lukey Coffee Shop",
			coffeeName: "Espresso",
			description: "A rich and bold espresso",
			imagePath: "/hq720.jpg",
		},
		{
			id: 4,
			shopName: "Lukey Coffee Shop",
			coffeeName: "Espresso",
			description: "A rich and bold espresso",
			imagePath: "/coffee2.png",
		},
		{
			id: 5,
			shopName: "Lukey Coffee Shop",
			coffeeName: "Espresso",
			description: "A rich and bold espresso",
			imagePath: "/coffee1.jpg",
		},
		{
			id: 6,
			shopName: "Lukey Coffee Shop",
			coffeeName: "Espresso",
			description: "A rich and bold espresso",
			imagePath: "/coffe_logo.png",
		},
	];

	const CardItem = ({ item }) => {
		const { shopName, coffeeName, description, imagePath } = item;
		const [open, setOpen] = useState(false);

		const handleOpenDialog = () => {
			setOpen(true);
		};
		return (
			<Card variant="outlined" sx={{ p: 1, width: 280 }}>
				<CardContent>
					<Typography
						gutterBottom
						sx={{ color: "text.secondary", fontSize: 16 }}
					>
						{shopName}
					</Typography>
					<Typography variant="h5" component="div">
						{coffeeName}
					</Typography>
					<Typography sx={{ color: "text.secondary", mb: 1.5 }}>
						adjective
					</Typography>
					<Box>
						<img
							src={imagePath}
							alt="Coffee"
							style={{
								width: "100%",
								maxWidth: "350px",
								aspectRatio: 3 / 2,
								objectFit: "contain",
							}}
						/>
					</Box>

					<Typography variant="body2">
						{description}
						<br />
						{'"a benevolent smile"'}
					</Typography>
				</CardContent>
				<CardActions>
					<Button variant="outlined" onClick={handleOpenDialog}>
						Order Now
					</Button>

					<OrderDialog open={open} setOpen={setOpen} />
				</CardActions>
			</Card>
		);
	};

	return (
		<>
			<Typography
				variant="h3"
				color="Black"
				sx={{ display: "flex", justifyContent: "center", p: 2 }}
			>
				Coffee Cards
			</Typography>
		{/* <Header
          	imageSrc={img}
            imageAlt="card image"
          	imageHeight="30"
         	imageWidth="50"
          	title="Coffee Cards"
        /> */}
			<Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
				{coffeeShops.map((item, i) => (
					<div key={i}>
						<CardItem item={item} />
					</div>
				))}
			</Box>
		</>
	);
};

export default Cards;
