import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const Service = ({ service }) => {
	const [includedOpen, setIncludedOpen] = useState(false);

	return (
		<div>
			<div className="show-line"></div>
			<section>
				<div>
					<div className="relative">
						<h4>{service.number}</h4>
						<h3>{service.title}</h3>
					</div>
					<p>{service.description}</p>
				</div>

				<div
					className="included"
					onClick={() => setIncludedOpen(!includedOpen)}
				>
					<div>
						<p>Wat is inbegrepen?</p>
						{includedOpen ? (
							<KeyboardArrowUpRoundedIcon />
						) : (
							<KeyboardArrowDownRoundedIcon />
						)}
					</div>

					{includedOpen && (
						<ul>
							{service.included.map((included, index) => (
								<li key={index}>{included}</li>
							))}
						</ul>
					)}
				</div>
			</section>
		</div>
	);
};

export default Service;
