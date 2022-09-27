import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
	useEffect(() => {
		if (window !== "undefined") {
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
		}
	}, []);

	return null;
};

export default Scroll;
