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
import Service from "./components/Service";

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

	const servicesItems = [
		{
			number: "01",
			title: "Social Media Beheer",
			description:
				"Social Media Management is the day-to-day curation of your social platforms, where we skillfully bring your unique strategy and aesthetic to life. This way, you can focus on other priorities while we handle your social media.",
			included: [
				"Concept",
				"Script Writing",
				"Video / Photography",
				"Editing",
				"1 Free Revision",
				"30 Days Paid Advertising",
				"Google Drive or WeTransfer access to all content",
			],
		},
		{
			number: "02",
			title: "Branding",
			description:
				"If you’re looking for User Generated Content to share on your social platforms, then this is for you. Whether you need organic or paid ad videos for your social media, we’ve got you covered. We provide both one-off and monthly retainer packages, tailored to your business’s specific requirements.",
			included: [
				"Concept",
				"Script Writing",
				"Video / Photography",
				"Editing",
				"1 Free Revision",
				"30 Days Paid Advertising",
				"Google Drive or WeTransfer access to all content",
			],
		},
		{
			number: "03",
			title: "Content Creatie",
			description:
				"Our Content Creation service is the ideal complement to our Social Media Management packages or can be a standalone solution for those seeking content for one-time projects. It may involve receiving products for us to create content with, or we can come to your location, depending on your unique needs. We’re always ready to explore what we can do to meet your specific content requirements.",
			included: [
				"Concept",
				"Script Writing",
				"Video / Photography",
				"Editing",
				"1 Free Revision",
				"30 Days Paid Advertising",
				"Google Drive or WeTransfer access to all content",
			],
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
						{prosItems.map((pro, index) => (
							<article
								onClick={() => {
									if (openPros !== pro.title) {
										setOpenPros(pro.title);
									} else {
										setOpenPros("");
									}
								}}
								key={index}
							>
								<div>
									<div>
										<img
											src={pro.icon.src}
											alt={pro.icon.alt}
										/>

										<h3>{pro.title}</h3>
									</div>

									<h3>
										{pro.title === openPros ? "-" : "+"}
									</h3>
								</div>

								{pro.title === openPros && (
									<p>{pro.description}</p>
								)}
							</article>
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
			</main>

			<footer></footer>
		</div>
	);
}

export default App;
