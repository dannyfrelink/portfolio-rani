import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Carousel = ({ children }) => {
	const sliderRef = useRef(null);

	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
	};

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const prevSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	return (
		<div className="carousel">
			<ArrowBackIosNewRoundedIcon onClick={prevSlide} />

			<Slider ref={sliderRef} {...settings}>
				{children.map((slide, index) => (
					<div className="slide" key={index}>
						<p>{slide.review}</p>

						<h3>{slide.reviewer}</h3>
					</div>
				))}
			</Slider>

			<ArrowForwardIosRoundedIcon onClick={nextSlide} />
		</div>
	);
};

export default Carousel;
