/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 04.03.2021
 * Discription: Custom Menu Component with Navigation Interface 
 * Document: Menu.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react'

// Export Component
const Menu = () => {
    return(
	<div className="Menu">
	    <nav className="megaMenu" role="navigation">

		{/* Mega Menu Controls */}
		<div className="megaMenuControls">
		    <button className="megaMenuButton hamburger hamburgeElastic"
			    type="button"
			    aria-label="Menu"
			    aria-expanded="false"
			    aria-controls="primary-menu">
			<span className="hamburgerBox">
			    <span className="hamburgerInner"></span>
			    <span className="hamburgerLabel"></span>
			</span>
			<span className="hamburgerTitle hamburgerTitleVisible">Menu</span>
			<span className="hamburgerClose">Schlieﬂen</span>
		    </button>
		</div>

		{/* Primary Menu Component */}
		<div id="primaryMenu" className="megaMenuRows">
		    <div className="megaMenuRow megaMenuRow1">
		    </div>
		    <div className="megaMenuRow megaMenuRow2">
			<div className="div MegaMenuRow2-Slot1">
			    <div id="blockMenuLogo" className="block blockContent">
				<div className="textFormatted field fieldNameBody">
				    <div>
					Kulturelle Bruecken bauen
					<br />
					<a href="https://www.slambase.de/">
					    <img alt="Slam Base"
						 src="Slam-Base-Logo_RGB-310w.webp"
						 style={{width:"200px", height:"33px"}}
						 title="Slambase Steinfurt"
						 valign="middle"
						 target="_blank">
					    </img>
					</a>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		    <div className="megaMenuRow megaMenuRow3">
		    </div>
		    <div className="megaMenuRow megaMenuRow4">
		    </div>
		</div>
		
	    </nav>
	</div>
    );
}

export default Menu;
