import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { animateFrom, hide } from "./animations";
import Scroll from "./SmoothScroll";
import Home from "./home-section";
import About from "./about-section";
import Contact from "./contact-section";
import Layout from "./layout";
import Project from "./FeaturedWorks";
//import NonFeaturedWorks from "./NonFeaturedWorks";
import Others from "./others";

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
	useEffect(() => {
		gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
			hide(elem);

			ScrollTrigger.create({
				trigger: elem,
				onEnter: function () {
					animateFrom(elem);
				},
			});
		});
	}, []);
	return (
		<Layout>
			<div className="main">
				<title>James Kahoro: Fullstack Developer</title>
				<Scroll />
				<Home />
				<About />
				<Project />
				<Others />
				<Contact />
				<footer className="footer" data-scroll-section>
					<p>Design and built by James Kahoro</p>
					<p>&copy; {new Date().getFullYear()}</p>
				</footer>
			</div>
		</Layout>
	);
};
export default Content;
