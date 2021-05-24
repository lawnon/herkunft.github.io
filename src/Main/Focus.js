/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 23.03.2021
 * Discription: Customizable Thematic Focus Component 
 * Document: Focus.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react';

const FHeader = (props) => {
    return(
	<header className='thematic-focus__header'>
	    <div className='thematic-focus-box__title-and-intro'>
		<div className='thematic-focus-box__intro'>
		    {props.intro}
		</div>
		<h2 className='thematic-focus-box__title teaser__title'>
		    {props.title}
		</h2>
	    </div>
	    <div className='thematic-focus-box__description'>
		<p>
		    Kuratiert von<br/>  
		    <strong>
			<a href={props.curatorLink}>
			    {props.curator}
			</a>
		    </strong>
		</p>
	    </div>
	    {(props.articleLink != null && props.buttonText != null) &&
	     <div className='thematic-focus-box__more-link-wrapper'>
		 <a className='thematic-focus-box__more-link'
		    href={props.articleLink}>
		     {props.buttonText}
		 </a>
	     </div>}
	</header>
    );
}

const FNav = () => {
    return(
	<nav className="thematic-focus-box__links">
	    <a className="thematic-focus-box__link"
	       href='https://www.slambase.de/impressum'>
		<span className="thematic-focus-box__link-intro">
		    Video-Lesungen
		</span>
		<span className="thematic-focus-box__link-label">
		    #zuhauselesen
		</span>
	    </a>        
	    <a className="thematic-focus-box__link"
	       href="https://www.slambase.de/impressum">
		<span className="thematic-focus-box__link-intro">
		    Interviews &amp; Leseproben
		</span>
		<span className="thematic-focus-box__link-label">
		    Bibliothek
		</span>
	    </a>        
	    <a className="thematic-focus-box__link"
	       href="https://www.slambase.de/impressum">
		<span className="themat ic-focus-box__link-intro">
		    Bildende Kunst
		</span>
		<span className="thematic-focus-box__link-label">
		    Galerie
		</span>
	    </a>          
	</nav>
    );
}

export const FocusHeader = (props) => {
    return(
	<article className='thematic-focus-box'
		 style={{backgroundImage:props.img}}>
	    <article className='thematic-focus-box__words'>
		{/* Header Box */}
		<FHeader intro={props.intro}
			 title={props.title}
			 curator={props.curator}
			 curatorLink ={props.curatorLink}
			 articleLink={props.articleLink} />			
	    </article>
	</article>
    );
}

const FocusMain = (props) => {
    return(
	<article className='thematic-focus-box'
		 style={{backgroundImage:props.img}}>
	    <article className='thematic-focus-box__words'>
		{/* Header Box */}
		<FHeader intro={props.intro}
			 title={props.title}
			 curator={props.curator}
			 curatorLink ={props.curatorLink}
			 articleLink={props.articleLink}
			 buttonText={props.buttonText} />
		{/* Navigation Box */}
		<FNav />			
	    </article>
	</article>
    );
}

export default FocusMain;
