/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 20.03.2021
 * Discription: Custom Body Component with the Main Content 
 * Document: Main.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */

import React, {Component} from 'react';
import Menu from '../Menu/Menu.js';
import MenuConfig from '../Menu/MenuConfig';
import Article from './Article/Article';
import { Switch, Route } from 'react-router-dom';
import {
    GridFocusMain,
    GridFocusHeader,
    GridTwoSlotHalf,
    GridThreeSlotQuater,
} from './Grid.js';

// Export Component
class Main extends Component{

    constructor(props){
	super(props);

    }

    render(){
	
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

	const Main = () => {
	    return(	    
		<div className='Main'>
		    {/* Menu-Navigation Component */}
		    <Menu />
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
						<GridThreeSlotQuater articleLink_1='./Article'
								     img_1='_MG_7440w.webp'
								     imgAlt_1='Img Altanate Title'
								     imgTitle_1='This a Test Img Title'
								     title_1='This is a Test Article Titel'
								     articleType_1='Interview'
								     curator_1='Akobuije'
								     teaserText_1='In seinem Buch „Ich will doch nur frei sein“ beschreibt Filimon Mebrhatom seine Flucht vor der Militärdiktatur in Eritrea und seine Ankunft in Deutschland. Was ihn dazu bewegte, seine Geschichte aufzuschreiben und welche Botschaft er für europäische Politiker*innen hat, erzählt er im Zwischenraum-Interview.'

								     articleLink_2='https://www.slambase.de/impressum'
								     img_2='_MG_7524-640w.webp'
								     imgAlt_2='Img Altanate Title'
								     imgTitle_2='This a Test Img Title'
								     title_2='This is a Test Article Titel'
								     articleType_2='Interview'
								     curator_2='Akobuije'
								     teaserText_2='In seinem Buch „Ich will doch nur'

								     articleLink_3='https://www.slambase.de/impressum'
								     img_3='_MG_7524-640w.webp'
								     imgAlt_3='Img Altanate Title'
								     imgTitle_3='This a Test Img Title'
								     title_3='This is a Test Article Titel'
								     articleType_3='Interview'
								     curator_3='Akobuije'
								     teaserText_3='In seinem Buch „Ich will doch nur'/>
						
						<GridTwoSlotHalf articleLink_1='https://www.slambase.de/impressum'
								 img_1='_MG_7440w.webp'
								 imgAlt_1='Img Altanate Title'
								 imgTitle_1='This a Test Img Title'
								 title_1='This is a Test Article Titel'
								 articleType_1='Interview'
								 curator_1='Akobuije'
								 teaserText_1='In seinem Buch „Ich will doch nur frei sein“ beschreibt Filimon Mebrhatom seine Flucht vor der Militärdiktatur in Eritrea und seine Ankunft in Deutschland. Was ihn dazu bewegte, seine Geschichte aufzuschreiben und welche Botschaft er für europäische Politiker*innen hat, erzählt er im Zwischenraum-Interview.'
								 articleLink_2='https://www.slambase.de/impressum'
								 img_2='_MG_7524-640w.webp'
								 imgAlt_2='Img Altanate Title'
								 imgTitle_2='This a Test Img Title'
								 title_2='This is a Test Article Titel'
								 articleType_2='Interview'
								 curator_2='Akobuije'
								 teaserText_2='In seinem Buch „Ich will doch nur frei sein“ beschreibt Filimon Mebrhatom seine Flucht vor der Militärdiktatur in Eritrea und seine Ankunft in Deutschland. Was ihn dazu bewegte, seine Geschichte aufzuschreiben und welche Botschaft er für europäische Politiker*innen hat, erzählt er im Zwischenraum-Interview.'/>
						<GridFocusHeader img='url("SoulKitchenOpenStage_Web_06-1920w.webp")'
								 intro='Open Space for Robotics'
								 title='Videos Lectures'
								 curator='Akobuije'
								 curatorLink ='https://www.slambase.de/impressum'
								 articleLink='https://www.slambase.de/impressum'/>
						<GridThreeSlotQuater articleLink_1='https://www.slambase.de/impressum'
								     video_1='https://www.youtube.com/embed/8jdPZR63sx8'
								     imgAlt_1='Img Altanate Title'
								     imgTitle_1='This a Test Img Title'
								     title_1='This is a Test Article Titel'
								     articleType_1='Interview'
								     curator_1='Akobuije'
								     teaserText_1='In seinem Buch „Ich will doch nur frei sein“ beschreibt Filimon Mebrhatom seine Flucht vor der Militärdiktatur in Eritrea und seine Ankunft in Deutschland. Was ihn dazu bewegte, seine Geschichte aufzuschreiben und welche Botschaft er für europäische Politiker*innen hat, erzählt er im Zwischenraum-Interview.'

								     articleLink_2='https://www.slambase.de/impressum'
								     img_2='_MG_7524-640w.webp'
								     imgAlt_2='Img Altanate Title'
								     imgTitle_2='This a Test Img Title'
								     title_2='This is a Test Article Titel'
								     articleType_2='Interview'
								     curator_2='Akobuije'
								     teaserText_2='In seinem Buch „Ich will doch nur'

								     articleLink_3='https://www.slambase.de/impressum'
								     img_3='_MG_7524-640w.webp'
								     imgAlt_3='Img Altanate Title'
								     imgTitle_3='This a Test Img Title'
								     title_3='This is a Test Article Titel'
								     articleType_3='Interview'
								     curator_3='Akobuije'
								     teaserText_3='In seinem Buch „Ich will doch nur'/>
						
						<GridTwoSlotHalf articleLink_1='https://www.slambase.de/impressum'
								 video_1='https://www.youtube.com/embed/8jdPZR63sx8'
								 imgAlt_1='Img Altanate Title'
								 imgTitle_1='This a Test Img Title'
								 title_1='This is a Test Article Titel'
								 articleType_1='Interview'
								 curator_1='Akobuije'
								 teaserText_1='In seinem Buch „Ich will doch nur frei sein“ beschreibt Filimon Mebrhatom seine Flucht vor der Militärdiktatur in Eritrea und seine Ankunft in Deutschland. Was ihn dazu bewegte, seine Geschichte aufzuschreiben und welche Botschaft er für europäische Politiker*innen hat, erzählt er im Zwischenraum-Interview.'
								 articleLink_2='https://www.slambase.de/impressum'
								 video_2='https://www.youtube.com/embed/8jdPZR63sx8'
								 imgAlt_2='Img Altanate Title'
								 imgTitle_2='This a Test Img Title'
								 title_2='This is a Test Article Titel'
								 articleType_2='Interview'
								 curator_2='Akobuije'
								 teaserText_2='In seinem Buch „Ich will doch nur frei sein“ beschreibt Filimon Mebrhatom seine Flucht vor der Militärdiktatur in Eritrea und seine Ankunft in Deutschland. Was ihn dazu bewegte, seine Geschichte aufzuschreiben und welche Botschaft er für europäische Politiker*innen hat, erzählt er im Zwischenraum-Interview.'/>
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

	return (
	    <Switch>		
		<Route exact path='/Article' component={Article} />
		<Route exact path='/user=SlamBase;psw=20210418_herkunft;Component=MenuConfig'
		       component={MenuConfig} />
		<Route path='/' component={Main} />
	    </Switch>
	);
    }
}

export default Main;
