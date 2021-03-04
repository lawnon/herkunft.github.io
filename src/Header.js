import React, {Component} from 'react'

// Initialize Header Component
const app = document.getElementById('root')
const header = document.createElement('header');
header.setAttribute('class', 'Header');
//header.setAttribute('role', 'banner');

// Initialize Section-Branding Component 
const divBranding = document.createElement('div');
divBranding.setAttribute('class', 'Branding');

// Initialize Section-Header-Items Component
const divItems = document.createElement('div');
divItems.setAttribute('class', 'HeaderItems');

// Initialize Section-Silde-In-Menu Component
const divMenu = document.createElement('div');
divMenu.setAttribute('class', 'SlideInMenu');

// Initialize Logo Compoent
const logo = document.createElement('img');
logo.src = 'logo.png'

// H1 Tag just for Testing
const h1Test = document.createElement('h1');
h1Test.textContent = ("Way Maker, Miracle Worker, Promise Keeper, Light in the darkness. My God that is who You are");

// Load Header Component
//app.appendChild(header)
header.appendChild(divBranding)
header.appendChild(divItems)
header.appendChild(divMenu)
header.appendChild(h1Test)

//Load Branding Component
divBranding.appendChild(logo)

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
	    </div>

	    {/* Definition of Menue Navigation Component */}
	    <div class="divHeaderMenu">
		
	    </div>
	</header>
    );
}

// Initialisation of Total, Export Header Components 
const Header = () => {
    return(
	<div>
	    <PreHeader />
	    <MainHeader />
	</div>
    )
}

export default Header;
