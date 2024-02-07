import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const formRef = useRef();

	const handleFormSubmit = (e) => {
		e.preventDefault();

		console.log(process.env);

		emailjs
			.sendForm(
				process.env.CONTACT_SERVICE_ID,
				process.env.CONTACT_TEMPLATE_ID,
				e.target,
				{
					publicKey: process.env.CONTACT_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<form ref={formRef} onSubmit={handleFormSubmit}>
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

			<button className="button" type="submit">
				Versturen
			</button>
		</form>
	);
};

export default ContactForm;
