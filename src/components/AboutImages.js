const AboutImages = ({ title, imageBig, imageSmall }) => {
	return (
		<section className="about-images">
			<h4>{title}</h4>
			<img src={imageBig} alt="Over Mij ContentFlow Media" />
			<img src={imageSmall} alt="Over Mij ContentFlow Media" />
		</section>
	);
};

export default AboutImages;
