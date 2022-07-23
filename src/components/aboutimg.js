import React from "react";
import Dev from "../images/dev.png";

// const backgroundImagePic = {
// 	backgroundImage: `url(${Dev})`,
// 	backgroundSize: "cover",
// 	backgroundRepeat: "no-repeat",
// 	backgroundPosition: "50% 50%",
// };
// const backgroundImage = {
// 	backgroundImage: `url(${Dev})`,
// 	backgroundSize: "cover",
// 	backgroundRepeat: "no-repeat",
// 	backgroundPosition: "50% 50%",
// };

function Aboutimg() {
	return (
		<>
			{/* <div className="imgstyle-one">
				<div class="glitch">
					<div className="glitch__img" style={backgroundImage}></div>
					<div className="glitch__img" style={backgroundImage}></div>
					<div className="glitch__img" style={backgroundImage}></div>
					<div className="glitch__img" style={backgroundImage}></div>
					<div className="glitch__img" style={backgroundImage}></div>
				</div>
			</div> */}
			<div className="imgstyle-two">
				<div class="image-wrapper">
					<img class="image-1" src={Dev} alt="" />
					<img class="image-2" src={Dev} alt="" />
					<img class="image-3" src={Dev} alt="" />
					<img class="image-4" src={Dev} alt="" />
				</div>
			</div>
		</>
	);
}

export default Aboutimg;
