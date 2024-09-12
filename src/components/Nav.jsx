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
				src=" https://netflix-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Ficons%2Fnetflix-logo.dd346d18734d92365134c7c5db844714.svg&w=384&q=75"
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
