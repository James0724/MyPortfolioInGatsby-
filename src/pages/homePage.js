import React from "react";
//import MouseScroll from "../components/mouse";

function HomePage() {
	return (
		<div className="home">
			<div className="overlay"></div>
			<div className="home__info">
				<h3 className="home__info__intro">Hi, my name is</h3>
				<h1 className="home__info__name">JAMES KAHORO</h1>
				<h3 className="home__info__profession">Full stack web developer</h3>

				{/* <MouseScroll /> */}
				{/* <h2 className="home__info__short-title">short intro</h2>
				<p className="home__info__about-intro">
					I am a full-stack web developer, well equipped with the right
					necessary tools to build custom web applications, I deliver fast,
					resilient solutions optimized for performance and scalability.{" "}
				</p>
				<button className="btn btn-secondary">View Resume</button> */}
			</div>
			{/* <div class="link">
				<span class="link__arrow">
					<span></span>
					<span></span>
				</span>
				<span class="link__line"></span>
				<span class="link__text">About</span>
			</div> */}
			<div className="scroll-down">
				<span class="arrow-down"></span>
				<span id="scroll-title">About</span>
			</div>
		</div>
	);
}

export default HomePage;
