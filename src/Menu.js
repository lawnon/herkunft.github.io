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
	<div class="Menu">
	    <nav class="megaMenu" role="navigation">

		{/* Mega Menu Controls */}
		<div class="megaMenuControls">
		    <button class="megaMenuButton hamburger hamburgeElastic"
			    type="button"
			    aria-label="Menu"
			    aria-expanded="false"
			    aria-controls="primary-menu">
			<span class="hamburgerBox">
			    <span class="hamburgerInner"></span>
			    <span class="hamburgerLabel"></span>
			</span>
			<span class="hamburgerTitle hamburgerTitleVisible">Menu</span>
			<span class="hamburgerClose">Schlieﬂen</span>
		    </button>
		</div>

		{/* Primary Menu Component */}
		<div id="primaryMenu" class="megaMenuRows">
		    <div class="megaMenuRow megaMenuRow1">
		    </div>
		    <div class="megaMenuRow megaMenuRow2">
			<div class="div MegaMenuRow2-Slot1">
			    <div id="blockMenuLogo" class="block blockContent">
				<div class="textFormatted field fieldNameBody">
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
		    <div class="megaMenuRow megaMenuRow3">
		    </div>
		    <div class="megaMenuRow megaMenuRow4">
		    </div>
		</div>
		
	    </nav>
	</div>
    );
}

export default Menu;
