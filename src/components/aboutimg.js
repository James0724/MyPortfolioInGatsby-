import React from "react";
import Dev from "../images/dev.png";

function Aboutimg() {
	const data = useStaticQuery(query);
	const image = getImage(data.file);
	console.log(image);
	return (
		<div className="imgstyle-two">
			<div className="image-wrapper">
				<img className="image-1" src={Dev} alt="" />
				<img className="image-2" src={Dev} alt="" />
				<img className="image-3" src={Dev} alt="" />
				<img className="image-4" src={Dev} alt="" />
			</div>
		</div>
	);
}

export default Aboutimg;
