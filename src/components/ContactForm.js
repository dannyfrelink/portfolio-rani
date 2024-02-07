import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_CONTACT_SERVICE_ID,
				process.env.REACT_APP_CONTACT_TEMPLATE_ID,
				e.target,
				{
					publicKey: process.env.REACT_APP_CONTACT_PUBLIC_KEY,
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
		<form onSubmit={handleFormSubmit}>
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
