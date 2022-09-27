import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollToPlugin);

function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggle = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Detect if a link's href goes to the current page
	function getSamePageAnchor(link) {
		if (
			link.protocol !== window.location.protocol ||
			link.host !== window.location.host ||
			link.pathname !== window.location.pathname ||
			link.search !== window.location.search
		) {
			return false;
		}

		return link.hash;
	}

	// Scroll to a given hash, preventing the event given if there is one
	function scrollToHash(hash, e) {
		const scrollbar = Scrollbar.init(document.querySelector(".main"));
		const elem = hash ? document.querySelector(hash) : false;
		if (elem) {
			if (e) e.preventDefault();
			scrollbar.scrollIntoView(document.querySelector(`#${elem.id}`));
		}
	}

	// If a link's href is within the current page, scroll to it instead
	const getLink = () => {
		document.querySelectorAll("a[href]").forEach((a) => {
			a.addEventListener("click", (e) => {
				scrollToHash(getSamePageAnchor(a), e);
			});
		});
	};

	useEffect(() => {
		getLink();
	}, []);

	// Scroll to the element in the URL's hash on load
	//scrollToHash(window.location.hash);

	return (
		<header>
			<div className="navbar-main">
				<a className="logo" href="#home">
					<div className="title">
						<h1>
							James Kahoro<span>.</span>
						</h1>
					</div>

					<div className="role">
						<div className="block"></div>
						<p>Fullstack Web Dev</p>
					</div>
				</a>

				<div
					className={`menu-icon ${isMenuOpen ? "active" : ""}`}
					onClick={toggle}
				>
					<div className="menu-icon__cheeckbox"></div>
					<div>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<nav className={`nav ${isMenuOpen ? "open" : ""}`}>
				<ul
					className={`menu-items ${isMenuOpen ? "open" : ""}`}
					onClick={() => {
						closeMenu();
					}}
				>
					<li className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
						<a className="active" href="#home">
							Home
						</a>
					</li>
					<li className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
						<a href="#about">About</a>
					</li>
					<li className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
						<a href="#works">Works</a>
					</li>
					<li className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
						<a href="#projects">Projects</a>
					</li>
					<li className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Menu;
