import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import imagepath from "../assets/Espresso_cup.png";
import svgImage from "../assets/backimage.png";

const AboutUs = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				backgroundImage: `url(${svgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				color: "white",
				textAlign: "center",
				padding: 2,
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "end",
					justifyContent: "space-between",
					backgroundColor: "rgba(0, 0, 0, 0.6)",
					padding: 3,
					borderRadius: 2,
					boxShadow: 2,
					width: "30%",
					maxWidth: "1200px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						width: "100%",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography variant="h4" color="secondary">
						About Us
					</Typography>
					<img
						src={imagepath}
						alt="Coffee Shop Logo"
						style={{ width: "100px", height: "auto", marginBottom: "16px" }}
					/>
					<Typography variant="h4" sx={{ marginBottom: 2 }}>
						Welcome to Our Coffee Shop
					</Typography>
					<Typography sx={{ fontSize: 16, marginBottom: 2 }}>
						At our coffee shop, we serve the finest coffee beans and provide a
						cozy environment for you to enjoy your favorite drinks. Whether
						you're looking for a quick espresso or a relaxing latte, we have
						something for everyone.
					</Typography>
					<Button
						variant="contained"
						component={Link}
						href="/#card"
						sx={{
							backgroundColor: "primary.main",
							color: "white",
							"&:hover": {
								backgroundColor: "primary.dark",
							},
						}}
					>
						Learn More
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default AboutUs;
