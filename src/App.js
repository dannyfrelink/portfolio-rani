import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, Element } from "react-scroll";
import coverImage from "./assets/images/cover.JPG";
import prosImage from "./assets/images/pros.JPG";
import aboutImageBig from "./assets/images/about-big.JPG";
import aboutImageSmall from "./assets/images/about-small.JPG";
import contactImage from "./assets/images/contact.JPG";
import Service from "./components/Service";
import Pros from "./components/Pros";
import Carousel from "./components/Carousel";
import {
	navItems,
	processItems,
	prosItems,
	reviewItems,
	servicesItems,
} from "./variables";
import AboutImages from "./components/AboutImages";
import ProcessItem from "./components/ProcessItem";
import ContactForm from "./components/ContactForm";

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

				<nav
					className={`${closeNav && "closeNav"} ${
						navOpen && "navOpen"
					}`}
				>
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
			</header>

			<main>
				<section id="intro">
					<img src={coverImage} alt="ContentFlow Media" />

					<article>
						<h1>
							ContentFlow Media, jouw partner in social media
							succes!
						</h1>
						<p>
							Welkom! Ik ben Rani, een gepassioneerde social media
							manager en content creator. Als oprichtster van
							ContentFlow Media zet ik mijn expertise in om
							ondernemers (en bedrijven) zoals jij te ondersteunen
							bij hun groei op social media! Samen bouwen we aan
							een strategie die aansluit op jouw doelen en
							doelgroep en creëren we content die de aandacht
							grijpt en vasthoudt. Social media kan als de
							perfecte marketing tool worden ingezet om de doelen
							van jouw bedrijf of onderneming te behalen.
							ContentFlow Media zal jou helpen de volledige kracht
							van sociale media te benutten, zodat jouw bedrijf
							online op de kaart wordt gezet.
						</p>

						<Link
							className="button"
							to="contact"
							smooth={true}
							offset={-100}
							duration={500}
						>
							Plan een kennismaking
						</Link>
					</article>
				</section>

				<Element id="pros" name={navItems[0].toLowerCase()}>
					<section className="dark-background">
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

						<Link
							className="button"
							to="diensten"
							smooth={true}
							offset={-100}
							duration={500}
						>
							Ontdek het aanbod
						</Link>
					</section>

					<img src={prosImage} alt="Voordelen ContentFlow Media" />
				</Element>

				<Element id="services" name={navItems[1].toLowerCase()}>
					<h2>Diensten</h2>

					<div className="show-line-large"></div>

					<div>
						{servicesItems.map((service, index) => (
							<Service service={service} key={index} />
						))}
					</div>
				</Element>

				<Element
					id="reviews"
					className="dark-background"
					name={navItems[2].toLowerCase()}
				>
					<h2>Klant reviews</h2>

					<Carousel children={reviewItems} />
				</Element>

				<Element
					id="about"
					name={navItems[3].toLowerCase().split(" ").join("-")}
				>
					<AboutImages
						title="RANI"
						imageBig={aboutImageBig}
						imageSmall={aboutImageSmall}
					/>

					<section className="about-text">
						<h2>Leer mij kennen</h2>

						<p>
							Met een ruime ervaring in social media beheer en
							content creatie, ben ik, Rani van Delden,
							gespecialiseerd in het creëren van visuele content
							die merkverhalen op een boeiende manier vertelt.
							Mijn oog voor detail en mijn passie voor het creëren
							van visuals zijn altijd de drijvende kracht geweest
							in mijn reis.
						</p>

						<p>
							Daarnaast ben ik een toegewijde moeder en een
							gepassioneerde liefhebber van sociale media, waarbij
							ik mijn kennis, die ik heb opgedaan tijdens een HBO
							LOI-cursus in sociale media én ervaring als
							secretaresse, combineer om merken te helpen hun
							unieke verhalen te delen, verbinding te maken met
							hun publiek en groei te realiseren.
						</p>
					</section>
				</Element>

				<Element
					id="process"
					className="dark-background"
					name={navItems[4].toLowerCase()}
				>
					<h2>Het proces</h2>

					<div>
						{processItems.map((process, index) => (
							<ProcessItem
								key={index}
								number={process.number}
								title={process.title}
								description={process.description}
							/>
						))}
					</div>
				</Element>

				<div id="contact">
					<img src={contactImage} alt="Contact ContentFlow Media" />

					<section>
						<Element name={navItems[5].toLowerCase()}>
							<h2>Plan een kennismakingsgesprek</h2>
							<p>
								Logisch dat je nog een aantal vragen hebt en
								wilt onderzoeken of we een goede match zijn. Vul
								daarom hieronder je gegevens in en ik zal binnen
								48 uur contact met je op nemen!
							</p>
							<p>
								Ben je nog zoekende of heb je mogelijk nog geen
								volledig beeld van de opties? Neem dan ook
								contact met mij op voor een vrijblijvend
								gesprek.
							</p>
							<p>Voor direct contact via Whatsapp:</p>
							<p>+31 6 12032808</p>
						</Element>

						<ContactForm />
					</section>
				</div>
			</main>

			<footer>
				<p>©2024 Rani van Delden</p>
			</footer>
		</div>
	);
}

export default App;
