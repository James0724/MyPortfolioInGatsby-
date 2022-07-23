import * as React from "react";
import background from "../images/background.jpg";
import HomePage from "./homePage";

import "../dist/css/main.css";
import AboutPage from "./aboutPage";
import ProjectPage from "./projectPage";
import ContactPage from "./contactPage";

// styles
const backgroundImagePic = {
	backgroundImage: `url(${background})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "50% 50%",
};

const IndexPage = () => {
	return (
		<main>
			<title>Home Page</title>
			<nav className="menu"></nav>
			<section id="home" style={backgroundImagePic}>
				<HomePage />
			</section>
			<section id="about">
				<AboutPage />
			</section>
			<section id="project">
				<ProjectPage />
			</section>
			<section id="contact">
				<ContactPage />
			</section>
			<footer className="footer">
				<p>Design and built by James Kahoro</p>
				<p>&copy; {new Date().getFullYear()}</p>
			</footer>
		</main>
	);
};

export default IndexPage;
