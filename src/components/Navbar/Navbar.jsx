import React from 'react';

function Navbar() {
	return (
		<nav>
			<div className="logo-and-nav">
				<img src="" alt="" />
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Projects</li>
				</ul>
			</div>

			<div className="">
				<ul className="Socials">
					<li>Linkedin</li>
					<li>Github</li>
				</ul>
				<div className="Theme-selector"></div>
			</div>
		</nav>
	);
}

export default Navbar;
