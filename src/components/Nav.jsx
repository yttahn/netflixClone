import React, { useState, useEffect } from "react";
import "../assets/css/Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);

  // Define the scroll handler
  const handleScroll = () => {
    console.log("scrolling");
  };


	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pFxyjb_z1iAAlUM2eshXzO0h3X_QLDDFhA&s"
				alt="Netflix Logo"
			/>
			<img
				className="nav__avatar"
				src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
				alt="Avatar logo"
			/>
		</div>
	);
}

export default Nav;
