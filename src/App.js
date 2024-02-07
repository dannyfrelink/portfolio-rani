import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, Element } from "react-scroll";
import coverImage from "./assets/images/cover.JPG";
import Service from "./components/Service";
import Pros from "./components/Pros";
import Carousel from "./components/Carousel";
import { navItems, prosItems, reviewItems, servicesItems } from "./variables";

function App() {
	const [navOpen, setNavOpen] = useState(false);
	const [closeNav, setCloseNav] = useState(false);
	const [openPros, setOpenPros] = useState("");

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

				<Element
					id="pros"
					className="dark-background"
					name={navItems[0].toLowerCase()}
				>
					<h2>Stel je eens voor...</h2>

					<section>
						{prosItems.map((pro, index) => (
							<Pros
								key={index}
								pro={pro}
								openPros={openPros}
								setOpenPros={setOpenPros}
							/>
						))}
					</section>

					<button className="button">Ontdek het aanbod</button>
				</Element>

				<Element id="services" name={navItems[1].toLowerCase()}>
					<h2>Diensten</h2>

					{servicesItems.map((service, index) => (
						<Service service={service} key={index} />
					))}
				</Element>

				<Element
					id="reviews"
					className="dark-background"
					name={navItems[2].toLowerCase()}
				>
					<h2>Klant reviews</h2>

					<Carousel children={reviewItems} />
				</Element>
			</main>

			<footer></footer>
		</div>
	);
}

export default App;
