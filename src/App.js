import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, Element } from "react-scroll";
import coverImage from "./assets/images/cover.JPG";
import timeIcon from "./assets/icons/time.png";
import performanceIcon from "./assets/icons/performance.png";
import strategyIcon from "./assets/icons/strategy.png";
import contentIcon from "./assets/icons/content.png";
import relaxIcon from "./assets/icons/relax.png";
import growthIcon from "./assets/icons/growth.png";

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

	const [openPros, setOpenPros] = useState("");
	const prosItems = [
		{
			title: "Tijdsbesparing",
			description:
				"Door social media uit te besteden kun je jouw kostbare tijd, aandacht en energie besteden aan je core business.",
			icon: {
				src: timeIcon,
				alt: "Tijdsbesparing Icoon",
			},
		},
		{
			title: "Optimalisatie online aanwezigheid",
			description:
				"Door social media uit te besteden kun je jouw kostbare tijd, aandacht en energie besteden aan je core business.",
			icon: performanceIcon,
			icon: {
				src: performanceIcon,
				alt: "Optimalisatie Online Aanwezigheid Icoon",
			},
		},
		{
			title: "Strategie",
			description:
				"Door social media uit te besteden kun je jouw kostbare tijd, aandacht en energie besteden aan je core business.",
			icon: strategyIcon,
			icon: {
				src: strategyIcon,
				alt: "Strategie Icoon",
			},
		},
		{
			title: "Content",
			description:
				"Door social media uit te besteden kun je jouw kostbare tijd, aandacht en energie besteden aan je core business.",
			icon: {
				src: contentIcon,
				alt: "Content Icoon",
			},
		},
		{
			title: "Gemoedsrust",
			description:
				"Door social media uit te besteden kun je jouw kostbare tijd, aandacht en energie besteden aan je core business.",
			icon: {
				src: relaxIcon,
				alt: "Gemoedsrust Icoon",
			},
		},
		{
			title: "Groei",
			description:
				"Door social media uit te besteden kun je jouw kostbare tijd, aandacht en energie besteden aan je core business.",
			icon: growthIcon,
			icon: {
				src: growthIcon,
				alt: "Groei Icoon",
			},
		},
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

				<Element id="pros" name={navItems[0].toLowerCase()}>
					<h2>Stel je eens voor...</h2>

					<section>
						{prosItems.map((item, index) => (
							<article
								onClick={() => {
									if (openPros !== item.title) {
										setOpenPros(item.title);
									} else {
										setOpenPros("");
									}
								}}
								key={index}
							>
								<div>
									<div>
										<img
											src={item.icon.src}
											alt={item.icon.alt}
										/>

										<h3>{item.title}</h3>
									</div>

									<h3>
										{item.title === openPros ? "-" : "+"}
									</h3>
								</div>

								{item.title === openPros && (
									<p>{item.description}</p>
								)}
							</article>
						))}
					</section>

					<button className="button">Ontdek het aanbod</button>
				</Element>

				<Element
					id="services"
					name={navItems[1].toLowerCase()}
				></Element>
			</main>

			<footer></footer>
		</div>
	);
}

export default App;
