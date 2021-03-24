/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 20.03.2021
 * Discription: Custom Body Component with the Main Content 
 * Document: Main.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react';
import {GridFocusMain, GridFocusHeader} from './Grid.js';

// Export Component
class Main extends Component{

    constructor(props){
	super(props);

	// State Initialisation
	this.state = {
	    
	};
    }
    
    render(){
	
	const GridThematicFocus = () => {
	    return (
		<div className='grid-container'>
		    <div className='grid-container-content'>
			<div className='grid-container-before'></div>
			<div className='grid-slots-wrapper'>
			    <div className='grid-slot-1d1 grid-slot-first'>
				<div className='grid-boxes-wrapper'>
				    <div className='grid-box'>
					{/*<FocusMain img='url("SoulKitchenOpenStage_Web_06-1920w.webp")'*/} />
					
				    </div>
				</div>
			    </div>
			</div>
			<div className='grid-container-after'></div>
		    </div>
		</div>
	    );
	}
	
	const GridOneSlotWhole = () => {
	    return (
		<div className='grid-container'>
		    <div className='grid-container-content'>
			<div className='grid-container-before'></div>
			<div className='grid-slots-wrapper'>
			    <div className='grid-slot-1d1 grid-slot-first'>
				<div className='grid-boxes-wrapper'>
				    <div className='grid-box'>
					{/*<FocusHeader img='url("SoulKitchenOpenStage_Web_06-1920w.webp")'*/} />
				    </div>
				</div>
			    </div>
			</div>
			<div className='grid-container-after'></div>
		    </div>
		</div>
	    );
	}

	const GridInnerBox = () => {
	    return(
		null
	    );
	}
	
	const GridTwoSlotHalf = () => {
	    return (
		null
	    );
	}
  
	const GridTwoSlotQuater = () => {
	    return (
		null
	    );
	}

	const GridThreeSlotEqual = () => {
	    return (
		null
	    );
	};
	
	const Copyright = () => {
	    return(
		<div class='print-copyright-container'>
		    <p class='print-copyright-text'>
			<b>© Slam Base</b><br/>
			Waldstraße 30B<br/>
			26903 Surwold, Germany<br/>
			+49 (0) 1521-1840284<br/>
			<i>www.slambase.de</i><br/>
			<i>info@slambase.de</i>
		    </p>
		</div>
	    );
	}

	return(	    
	    <div className='Main'>
		{/* Dominant Body of Content */}
		<main role='main'>
		    <a id='main-content' tabindex='-1'></a>
		    <div className='region region-slide-in-menu site-content js-etracker'>
			<div className='region region-content'>
			    <div id='block-Buije-Content'
				 className='block block-system block-system-main-block'>
				<article className='node node--type-landingpage node--view-mode-full'
					 role='article'
					 about='/de/Dies ist ein Projekt von SlamBase'>
				    <div className='node-content'>
					<div className='grid grid-frontend clearfix'>
					    <GridFocusMain img='url("SoulKitchenOpenStage_Web_06-1920w.webp")'
							   intro='Open Space for Robotics'
							   title='This is A Test Title'
							   curator='Akobuije'
							   curatorLink ='https://www.slambase.de/impressum'
							   articleLink='https://www.slambase.de/impressum'
							   buttonText='About the Projekt'/>
					    <GridFocusHeader img='url("SoulKitchenOpenStage_Web_06-1920w.webp")'
							     intro='Open Space for Robotics'
							     title='This is A Test Title'
							     curator='Akobuije'
							     curatorLink ='https://www.slambase.de/impressum'
							     articleLink='https://www.slambase.de/impressum'
							     buttonText='About the Projekt'/>
					</div>
				    </div>
				</article>
			    </div>
			</div>
		    </div>
		    <Copyright />
		</main>
	    </div>	    
	);
    }
}

export default Main;
