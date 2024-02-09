import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
	const [loader, setLoader] = useState(false);
	const formRef = useRef(null);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setLoader(true);

		emailjs
			.sendForm(
				process.env.REACT_APP_CONTACT_SERVICE_ID,
				process.env.REACT_APP_CONTACT_TEMPLATE_ID,
				formRef.current,
				{
					publicKey: process.env.REACT_APP_CONTACT_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					console.log("SUCCESS!");
					formRef.current.reset();
					setLoader(false);
				},
				(error) => {
					console.log("FAILED...", error.text);
					setLoader(false);
				}
			);
	};

	return (
		<form ref={formRef} onSubmit={handleFormSubmit}>
			<div>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Naam *"
					required
				/>

				<input
					type="email"
					name="email"
					id="email"
					placeholder="E-mail *"
					required
				/>

				<input
					type="tel"
					name="phone"
					id="phone"
					placeholder="Telefoon"
					required
				/>

				<input
					type="text"
					name="company"
					id="company"
					placeholder="Bedrijf"
				/>

				<textarea
					name="message"
					placeholder="Jouw bericht ... *"
					rows={4}
					required
				/>
			</div>

			<div className={loader ? "loader-container" : ""}>
				<button className="button" type="submit">
					Versturen
				</button>

				{loader && <div className="loader"></div>}
			</div>
		</form>
	);
};

export default ContactForm;
