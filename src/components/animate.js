import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const menuShow = (elem1, elem2) => {
	gsap.from([elem1, elem2], {
		duration: 0.7,
		width: 0,
		transformOrigin: "left right",
		skewX: 2,
		ease: "power4.inOut",
		stagger: {
			amount: 0.2,
		},
	});
};
//Close menu
export const menuHide = (elem1, elem2) => {
	gsap.to([elem1, elem2], {
		duration: 0.8,
		width: 0,
		ease: "power4.inOut",
		stagger: {
			amount: 0.07,
		},
	});
};
