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

				<button
					onClick={() => {
						if (navOpen) {
							setCloseNav(true);

							const timeout = setTimeout(() => {
								setNavOpen(false);
								setCloseNav(false);
							}, 300);

							return () => clearTimeout(timeout);
						} else {
							setNavOpen(true);
						}
					}}
				>
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

			<main>
				<section id="intro">
					<img src={coverImage} alt="ContentFlow Media" />

					<article>
						<h1>ContentFlow Media</h1>
						<p>
							Hi, ik ben Tannaz en ik ben een gepassioneerde
							social media manager en eigenaresse van Next Level
							Socials. Ondernemers en bedrijven helpen groeien op
							social media is waar ik energie van krijg. Samen
							werken we aan een strategie die past bij jouw doelen
							en doelgroep, en creëren we boeiende content die de
							aandacht trekt.
						</p>

						<button className="button">
							Plan een kennismaking
						</button>
					</article>
				</section>
			</main>

			<footer></footer>
		</div>
	);
}

export default App;
