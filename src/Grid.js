/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 24.03.2021
 * Discription: Custom Grid Component with the Main Content 
 * Document: Grid.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react';
import FocusMain, {FocusHeader} from './Focus.js';


export const GridFocusMain = (props) => {
    return (
	<div className='grid-container'>
	    <div className='grid-container-content'>
		<div className='grid-container-before'></div>
		<div className='grid-slots-wrapper'>
		    <div className='grid-slot-1d1 grid-slot-first'>
			<div className='grid-boxes-wrapper'>
			    <div className='grid-box'>
				<FocusMain img={props.img} />				
			    </div>
			</div>
		    </div>
		</div>
		<div className='grid-container-after'></div>
	    </div>
	</div>
    );
}

export const GridFocusHeader = (props) => {
    return (
	<div className='grid-container'>
	    <div className='grid-container-content'>
		<div className='grid-container-before'></div>
		<div className='grid-slots-wrapper'>
		    <div className='grid-slot-1d1 grid-slot-first'>
			<div className='grid-boxes-wrapper'>
			    <div className='grid-box'>
				<FocusHeader img={props.img} />
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
