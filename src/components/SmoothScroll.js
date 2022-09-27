import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const options = {
	damping: 0.05,
	delegateTo: document,
	alwaysShowTracks: true,
};

const Scroll = () => {
	useEffect(() => {
		const scroller = document.querySelector(".main");

		let bodyScrollBar = Scrollbar.init(scroller, options);
		ScrollTrigger.scrollerProxy(".main", {
			scrollTop(value) {
				if (arguments.length) {
					bodyScrollBar.scrollTop = value;
				}
				return bodyScrollBar.scrollTop;
			},
		});
		bodyScrollBar.addListener(ScrollTrigger.update);

		ScrollTrigger.defaults({ scroller: scroller });
	}, []);

	return null;
};

export default Scroll;
