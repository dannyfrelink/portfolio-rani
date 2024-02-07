import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, Element } from "react-scroll";
import coverImage from "./assets/images/cover.JPG";
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
							I’m Tessa, the founder behind Yuki Social Studio.
							With a background in Fashion & Branding at the
							Amsterdam Fashion Institute, and working as a
							Content Creator and Content Marketeer, I specialize
							in crafting engaging visual content that tells
							compelling brand stories. My keen eye for detail and
							a deep passion for curating visuals have always been
							a driving force in my journey.
						</p>

						<p>
							Next to that, I’m a devoted animal lover. In 2022,
							my volunteer work at an animal shelter led me to my
							pup Yuki, who I adopted. He is a big part of my life
							and is the inspiration behind the name of this
							creative studio.
						</p>

						<p>
							Yuki Social Studio is the result of these
							experiences and passions, dedicated to helping
							brands tell their unique stories, connect with their
							audience, and achieve growth.
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

				<Element id="contact" name={navItems[5].toLowerCase()}>
					<img src={contactImage} alt="Contact ContentFlow Media" />

					<section>
						<article>
							<h2>Plan een kennismaking</h2>
							<p>
								Ik begrijp dat je veel vragen hebt en eerst wil
								onderzoeken of wij een match zijn. Vul hieronder
								je gegevens in en ik neem binnen 24 uur contact
								met je op!
							</p>
							<p>
								Bevind je je nog in de verkennende fase of heb
								je wellicht nog geen volledig beeld van de
								opties? Neem dan óók contact met mij op voor een
								vrijblijvend gesprek.
							</p>
							<p>Liever contact via Whatsapp?</p>
							<p>+31 6 22946356</p>
						</article>

						<ContactForm />
					</section>
				</Element>
			</main>

			<footer></footer>
		</div>
	);
}

export default App;
