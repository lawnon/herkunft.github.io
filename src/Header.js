/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 04.03.2021
 * Discription: Custom Header Component with Language Selection Interface
 * Document: Header.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react'


// Class Object Initialisation
class Header extends Component{

    // State Initialisation
    state = {btnDrop: null };
    
    render(){
	
	// Initialisation of Language Interface Click event
	const onClickDropButton = () => {
	    
	    // Assingment of State Variable
	    this.btnDrop = document.getElementById('btnDropdown');
	    
	    // Conditional Open Close Statement 	    
	    if(this.btnDrop.classList.contains('open')){
	   	this.btnDrop.classList.remove('open');
	   	this.btnDrop.classList.add('close');
	   	return console.log('Dropdown Button Closed');
	    }
	    if(this.btnDrop.classList.contains('close')){
	   	this.btnDrop.classList.remove('close');
	   	this.btnDrop.classList.add('open');
	 	return console.log('Dropdown Button Opened');
	    }
	    
	    // Return if Undefined
	    return console.log('Class open and close not found');
	}
	
	// Initialisation of html Pre-Header Components
	const PreHeader = () => {
	    return(
		<div className="divPreHeader">
		</div>
	    )
	}
	
	// Initialisation of Html Main Header Components
	const MainHeader = () => {
	    return(
		<header className="PageHeader" role="banner">
		    {/* Definition of Header Logo and Hyper Link */}
		    <div className="divBranding">
			<div id="blockLogo" className="block Logo">
			    <div className="field">
				<a href="https://www.slambase.de/" target="_blank">
				    <img src="Slam-Base-Logo_RGB-310w.webp" />
				</a>			   
			    </div>
			</div>		 
		    </div>
		    
		    {/* Difinition of Header Menu Items */}
		    <div className="divHeaderItems">
			<div id="blockLanguageSelection" className="block LanguageSelection">
			    <div id="btnDropdown"
				 className="dropButtonWrapper close"
				 onClick={()=>onClickDropButton()}>
				<div className="dropButtonWidget">
				    <ul className="dropdownLanguageItem dropButton">
					<li className="de dropbuttonAction">
					    <span className="languageLink activeLanguage" hrefLang="de">
						DE
					    </span>
					</li>
				    </ul>
				</div>
			    </div>
			</div>

			{/* Todo: Implementation of Search Component */}
		    </div>

		    {/* Todo: Implementation of Silde In Menu if necessary */} 
		</header>
	    );
	}

	
	// Initialisation of Total, Export Header Components
	return(
	    <div className="Header">
		<PreHeader />
		<MainHeader />
	    </div>
	)
    }
}
export default Header;
