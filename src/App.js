import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, Element } from "react-scroll";
import coverImage from "./assets/images/cover.JPG";

function App() {
	const [navOpen, setNavOpen] = useState(false);
	const [closeNav, setCloseNav] = useState(false);
	const navItems = [
		"Voordelen",
		"Diensten",
		"Reviews",
		"Over mij",
		"Proces",
		"Contact",
	];

	return (
		<div>
			<header>
				<img src={logo} alt="Logo ContentFlow Media" />

				<button onClick={() => setNavOpen(true)}>
					<MenuRoundedIcon fontSize="inherit" />
				</button>

				{navOpen && (
					<nav className={closeNav ? "closeNav" : ""}>
						{navItems.map((item, index) => (
							<li key={index}>
								<Link
									onClick={() => {
										setCloseNav(true);

										const timeout = setTimeout(() => {
											setNavOpen(false);
											setCloseNav(false);
										}, 300);

										return () => clearTimeout(timeout);
									}}
									to={item.toLowerCase().split(" ").join("-")}
									smooth={true}
									offset={-100}
									duration={500}
								>
									{item}
								</Link>
							</li>
						))}
					</nav>
				)}
			</header>

			<main></main>

			<footer></footer>
		</div>
	);
}

export default App;
