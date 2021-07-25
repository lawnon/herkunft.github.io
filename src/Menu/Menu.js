/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 04.03.2021
 * Discription: Custom Menu Component with Navigation Interface 
 * Document: Menu.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react';
import Data from './Menu.json';

// Export Component
class Menu extends Component{

    constructor(props){
	super(props);
	// State Initialisation
	this.state = {
	    navMegaMenu: null,
	    btnExpand: null,
	    spanTitle: null,
	};
    }
    
    componentDidMount() {
	
	// Get Mega Menu Row 1 Component
	const Row1 = document.getElementById('divMegaMenuRow1');	

	if(Row1 != null){	    
	    Data.members.forEach((Slot, index) => {

		// Debug Info
		//console.log(index);
		//console.log(Slot);		
		   
		// Initialize Menu Slot
		var divSlot = document.createElement('div');
		var divMegaMenuSlot = "divMegaMenu divSlot " + index;
		divSlot.setAttribute('className', divMegaMenuSlot);

		// Initialize Navigation Block
		var Nav = document.createElement('nav');
		var blockMegaMenuNavSlot = "blockMegaMenuNavSlot " + index;
		var blockMegaMenuSlot = "blockMegaMenuSlot " + index;
		Nav.setAttribute('id', blockMegaMenuNavSlot);
		Nav.setAttribute('className', 'block blockMenu navigation menuMain');
		Nav.setAttribute('role', 'navigation');
		Nav.setAttribute('aria-labelledby', blockMegaMenuSlot);

		var divVh = document.createElement('div');
		divVh.setAttribute('id' , blockMegaMenuSlot);
		divVh.setAttribute('className', 'visually-hidden');
		divVh.textContent = 'Megamenu ' + 'Row 1' + ' Slot ' + index.toString(); 
		
		// Initialize ul Element
		var Ul = document.createElement('ul');
		Ul.setAttribute('className', 'megaMenu megaMenu_menu Toplevel');

		// Initialize li Element
		var Li = document.createElement('li');
		Li.setAttribute('className', 'menuItem menuItem--Expanded menuItemHasChildren');

		// Initialize a Element
		var A = document.createElement('a');
		var class_a_name = Slot.color + ' menuLink menuLinkHasChildren';
		A.setAttribute('className', class_a_name);
		A.setAttribute('href', Slot.link);
		A.textContent = Slot.content;

		// Initialize Span Toggle Element
		var SpanToggler = document.createElement('span');
		SpanToggler.setAttribute('className', 'megaMenuToggler');
		SpanToggler.setAttribute('role', 'button');
		SpanToggler.setAttribute('aria-expanded', 'false');

		// Initializer Span visually Hidden Element
		var SpanVh = document.createElement('span');
		SpanVh.setAttribute('className', 'visually-hidden');
		SpanVh.textContent = 'Toggle submenu';

		// Initialize Span Toggler Icon
		var SpanIcon = document.createElement('span');
		SpanIcon.setAttribute('className', 'megaMenuTogglerIcon');
		SpanIcon.setAttribute('aria-hidden', 'true');

		var UlToplevel = document.createElement('ul');
		UlToplevel.setAttribute('className', 'megaMenu megaMenuToplevel');
	   	
		// Initialize Menu Slot
		Row1.appendChild(divSlot);
		divSlot.appendChild(Nav);
		Nav.appendChild(divVh);
		Nav.appendChild(Ul);
		Ul.appendChild(Li);
		Li.appendChild(A);
		Li.appendChild(SpanToggler);
		Li.appendChild(UlToplevel);
		
		// Initialize Span Children
		SpanToggler.appendChild(SpanVh);
		SpanToggler.appendChild(SpanIcon);
		// Initialize Menu Slot Items
		Slot.items.forEach((item)=>{
		    var LiItem = document.createElement('li');
		    LiItem.setAttribute('className', 'menuItem');

		    var AItemLink = document.createElement('a');
		    AItemLink.setAttribute('className', 'menuLink');
		    AItemLink.setAttribute('href', item.link);
		    AItemLink.textContent = item.titel;

		    UlToplevel.appendChild(LiItem);
		    LiItem.appendChild(AItemLink);
		});
	    })	    
	}else{
	    console.log("MM Row 1 not found");
	}

	// Debug Info
	//console.log("Component Did Mount Completed");
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
		this.navMegaMenu.classList.add('megaMenu--Expanded');
		this.btnExpand.setAttribute('aria-expanded', 'true');
		this.spanTitle.classList.remove('hamburgerTitleVisible');
	    }else{
		this.navMegaMenu.classList.remove('megaMenu--Expanded');
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
		    <div id="divMegaMenuRow1" className="megaMenuRow megaMenuRow1">
			
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
		<nav id="navMegaMenu"
		     className="megaMenu"
		     role="navigation">
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
	);
    }
}

export default Menu;
