import React, { useEffect, useState, useRef } from "react";
import Content from "../components/content";
import Starter from "../components/loading-animation";

const HomePage = () => {
	const [preloader, setPreloader] = useState(true);

	const [timer, setTimer] = useState(5);

	const id = useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreloader(false);
	};

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((timer) => timer - 1);
		}, 1000);
	}, []);

	useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);

	return <>{preloader ? <Starter /> : <Content />}</>;
};

export default HomePage;
