/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 04.03.2021
 * Discription: Custom Menu Component with Navigation Interface 
 * Document: Menu.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react'

// Export Component
class Menu extends Component{

    // State Initialisation
    state = {
	navMegaMenu: null,
	btnExpand: null,
	spanTitle: null,
    }
    
    render(){
	// Initialisation of Menu Button Click Event
	const onClickExpand = () => {
	    // Assign State Variables
	    this.navMegaMenu = document.getElementById('navMegaMenu');
	    this.btnExpand = document.getElementById('btnExpand');
	    this.spanTitle = document.getElementById('spanTitle');
	    console.log('btnExpand pressed');

	    // Conditional Open and Close Statemnet for Expanding Mega Menu
	    if(this.btnExpand.getAttribute('aria-expanded') === 'false'){
		this.navMegaMenu.classList.add('megaMenuExpanded');
		this.btnExpand.setAttribute('aria-expanded', 'true');
		this.spanTitle.classList.remove('hamburgerTitleVisible');
	    }else{
		this.navMegaMenu.classList.remove('megaMenuExpanded');
		this.btnExpand.setAttribute('aria-expanded', 'false');
		this.spanTitle.classList.add('hamburgerTitleVisible');
	    }
	}
	// Initialisation of Mega Menu Controls
	const MegaMenuControls = () => {
	    return(
		<div className="megaMenuControls">
		    <button id="btnExpand"
			    className="megaMenuButton hamburger hamburgerElastic"
			    type="button"
			    aria-label="Menu"
			    aria-expanded="false"
			    aria-controls="primary-menu"
			    onClick={()=>onClickExpand()}>
			<span className="hamburgerBox">
			    <span className="hamburgerInner"></span>
			    <span className="hamburgerLabel">Menü</span>
			</span>
			<span id="spanTitle" className="hamburgerTitle hamburgerTitleVisible">Menü</span>
			<span className="hamburgerClose">Schließen</span>
		    </button>
		</div>
	    );
	}

	// Initialisation of Mega Menu Primary Components
	const MegaMenuComponents = () => {
	    return(
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
	    );
	}
	
	// Initialisation of MegaMenu Navigation 
	const MegaMenu = () => {
	    return(
		<nav id="navMegaMenu" className="megaMenu" role="navigation">
		    {/* Mega Menu Controls */}
		    <MegaMenuControls />
		    {/* Primary Menu Component */}
		    <MegaMenuComponents />
		</nav>
	    );
	}

	// Initialisation of Final Menu Export
	return(
	    <div className="Menu">
		<MegaMenu />
	    </div>
	)
    }
}

    export default Menu;
