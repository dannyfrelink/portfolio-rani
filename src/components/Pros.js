const Pros = ({ pro, openPros, setOpenPros }) => {
	return (
		<article
			onClick={() => {
				if (openPros !== pro.title) {
					setOpenPros(pro.title);
				} else {
					setOpenPros("");
				}
			}}
		>
			<div>
				<div>
					<img src={pro.icon.src} alt={pro.icon.alt} />

					<h3>{pro.title}</h3>
				</div>

				<h3>{pro.title === openPros ? "-" : "+"}</h3>
			</div>

			{pro.title === openPros && <p>{pro.description}</p>}
		</article>
	);
};

export default Pros;
