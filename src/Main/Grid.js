/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 24.03.2021
 * Discription: Custom Grid Component with the Main Content 
 * Document: Grid.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react';
import FocusMain, {FocusHeader} from './Focus.js';
import {Link} from 'react-router-dom';

export const GridFocusMain = (props) => {
    return (
	<div className='grid-container'>
	    <div className='grid-container-content'>
		<div className='grid-container-before'></div>
		<div className='grid-slots-wrapper'>
		    <div className='grid-slot-1d1 grid-slot-first'>
			<div className='grid-boxes-wrapper'>
			    <div className='grid-box'>
				<FocusMain img={props.img}
					   intro={props.intro}
					   title={props.title}
					   curator={props.curator}
					   curatorLink ={props.curatorLink}
					   articleLink={props.articleLink}
					   buttonText={props.buttonText}/>				
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
				<FocusHeader img={props.img}
					     intro={props.intro}
					     title={props.title}
					     curator={props.curator}
					     curatorLink ={props.curatorLink}
					     articleLink={props.articleLink}
					     buttonText={props.buttonText}/>
			    </div>
			</div>
		    </div>
		</div>
		<div className='grid-container-after'></div>
	    </div>
	</div>
    );
}

const GridInnerBox = (props) => {
    var von = 'Von ';
    return(
	<div class="grid-box-inner">
	    <article role="article"
		     className="teaser--main">
		<Link to={props.articleLink}
		   rel="bookmark">
		    <div className="teaser__content-wrap">
					    
			{/* Teaser Flex Content */}
			<div className="teaser__image-wrap">
			    <div className="teaser__image">
				<div className="field field--name-field-teaser-image">
				    <article className="media media--type-image">
					<div data-blazy=""
					     className="blazy blazy--field blazy--field-media-image field">
					    <div className="media media--bundle--image">
						<picture>
						    {(props.video != null) &&
						     <iframe width="100%"
							     height="315"
							     src="https://www.youtube.com/embed/8jdPZR63sx8"
							     title="YouTube video player"
							     frameborder="0"
							     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							     allowfullscreen>
						     </iframe>}
						    {(props.video == null) &&
						    <img className="media__image media__element b-lazy b-responsive b-loaded"
							 loading="lazy"
							 src={props.img}
							 alt={props.imgAlt}
							 title={props.imgTitle}>
						    </img>}
						</picture>						
					    </div>
					</div>					
				    </article>
				</div>
			    </div>
			</div>			

			{/* Teaser FlexWrap */}
			<div className="teaser__flexwrap">
			    <h3 className="teaser__title">
				<span property="schema:name"
				      className="field field--name-title field--type-string field--label-hidden">
				    {props.title}
				</span>
			    </h3>  
			    <span property="schema:name"
				  content={props.title}
				  className="rdf-meta hidden">
			    </span>
			    <span className="rdf-meta hidden">
			    </span>			    
			    <div className="teaser__body">	
				<div className="field field--name-field-content-genre">
				    {props.articleType}
				</div>				
				<div className="teaser__text">				    
				    {props.teaserText}
				    <div className="content-authors field--name-field-authors">
					<span className="content-authors__byline">
					    {von}
					</span>
					{props.curator}
				    </div>				    
				</div>
			    </div>			    
			</div>			
		    </div>
		</Link>
	    </article>
	</div>
    );
}

export const GridTwoSlotHalf = (props) => {
    return (
	<div className='grid-container'>
	    <div className='grid-container-content'>
		<div className='grid-container-before'></div>
		<div className='grid-slots-wrapper'>

		    {/* First Article 50% */}
		    <div className='grid-slot-1d2 grid-slot-first'>
			<div className='grid-boxes-wrapper'>
			    <div className='grid-box'>
				<GridInnerBox articleLink={props.articleLink_1}
					      video={props.video_1}
					      img={props.img_1}
					      imgAlt={props.imgAlt_1}
					      imgTitle={props.imgTitle_1}
					      title={props.title_1}
					      articleType={props.articleType_1}
					      curator={props.curator_1}
					      teaserText={props.teaserText_1} />
			    </div>
			</div>
		    </div>

		    {/* Seconde Article 50% */}
		    <div className='grid-slot-1d2 grid-slot-last'>
			<div className='grid-boxes-wrapper'>
			    <div className='grid-box'>
				<GridInnerBox articleLink={props.articleLink_2}
					      video={props.video_2}
					      img={props.img_2}
					      imgAlt={props.imgAlt_2}
					      imgTitle={props.imgTitle_2}
					      title={props.title_2}
					      articleType={props.articleType_2}
					      curator={props.curator_2}
					      teaserText={props.teaserText_2} />
			    </div>
			</div>
		    </div>
		</div>
		<div className='grid-container-after'></div>
	    </div>
	</div>
    );
}

export const GridThreeSlotQuater = (props) => {
    return (	
	<div className='grid-container grid-container-c-2d3-1d3'>
	    <div className='grid-container-content'>
		<div className='grid-container-before'></div>
		<div className='grid-slots-wrapper'>

		    {/* First Article 67% */}
		    <div className='grid-slot-2d3 grid-slot-first'>
			<div className='grid-boxes-wrapper'>
			    <div className='grid-box'>
				<GridInnerBox articleLink={props.articleLink_1}
					      video={props.video_1}
					      img={props.img_1}
					      imgAlt={props.imgAlt_1}
					      imgTitle={props.imgTitle_1}
					      title={props.title_1}
					      articleType={props.articleType_1}
					      curator={props.curator_1}
					      teaserText={props.teaserText_1} />
			    </div>
			</div>
		    </div>

		    {/* Seconde Article 33% */}
		    <div className='grid-slot-1d3 grid-slot-multiple'>
			<div className='grid-boxes-wrapper'>
			    <div className='grid-box gird-box-first'>
				<GridInnerBox articleLink={props.articleLink_2}
					      video={props.video_2}
					      img={props.img_2}
					      imgAlt={props.imgAlt_2}
					      imgTitle={props.imgTitle_2}
					      title={props.title_2}
					      articleType={props.articleType_2}
					      curator={props.curator_2}
					      teaserText={props.teaserText_2} />
			    </div>
			    <div className='grid-box gird-box-last'>
				<GridInnerBox articleLink={props.articleLink_3}
					      video={props.video_3}
					      img={props.img_3}
					      imgAlt={props.imgAlt_3}
					      imgTitle={props.imgTitle_3}
					      title={props.title_3}
					      articleType={props.articleType_3}
					      curator={props.curator_3}
					      teaserText={props.teaserText_3} />
			    </div>
			</div>
		    </div>
		</div>
		<div className='grid-container-after'></div>
	    </div>
	</div>
    );
}
