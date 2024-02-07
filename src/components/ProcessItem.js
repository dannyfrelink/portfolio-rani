const ProcessItem = ({ number, title, description }) => {
	return (
		<section>
			<h4>{number}</h4>

			<article>
				<h3>{title}</h3>
				<p>{description}</p>
			</article>
		</section>
	);
};

export default ProcessItem;
