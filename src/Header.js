/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 04.03.2021
 * Discription: Custom Header Component with Language Selection Interface
 * Document: Header.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react'

// Initialisation of html Pre-Header Components
const PreHeader = () => {
    return(
	<div class="divPreHeader">
	</div>
    )
}

// Initialisation of Html Main Header Components
const MainHeader = () => {
    return(
	<header class="PageHeader" role="banner">
	    {/* Definition of Header Logo and Hyper Link */}
	    <div class="divBranding">
		<div id="blockLogo" class="block Logo">
		    <div class="field">
			<a href="https://www.slambase.de/" target="_blank">
			    <img src="Slam-Base-Logo_RGB-310w.webp" />
			</a>			   
		    </div>
		</div>		 
	    </div>
	    
	    {/* Difinition of Header Menu Items */}
	    <div class="divHeaderItems">
		<div id="blockLanguageSelection" class="block LanguageSelection">
		    <div class="dropButtonWrapper">
			<div class="dropButtonWidget">
			    <ul class="dropdownLanguageItem dropButton">
				<li class="de dropbuttonAction">
				    <span class="languageLink activeLanguage" hreflang="de">
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
const Header = () => {
    return(
	<div class="Header">
	    <PreHeader />
	    <MainHeader />
	</div>
    )
}

export default Header;
