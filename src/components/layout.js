import React from "react";
import "../styles/main.scss";
import Menu from "./navbar";

function Layout({ children }) {
	return (
		<>
			<Menu />
			{children}
		</>
	);
}

export default Layout;
