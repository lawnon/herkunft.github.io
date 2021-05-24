/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 28.03.2021
 * Discription: Custom Footer Component 
 * Document: Footer.js 
 * Template: https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst
 */


import React, {Component} from 'react';

// Export Component
class Footer extends Component{

    render(){
	return(
	    <div className="Footer">
		{/* Insert Content Here */}
		<footer class="site-footer"
			role="contentinfo">
		    <div class="site-footer-top-wrapper">
			<div class="inner">          
			</div>
		    </div>
		    <div class="site-footer-middle-wrapper">
			<div class="inner">
			</div>
		    </div>
		    <div class="site-footer-bottom-wrapper">
			<div class="inner">
			    <div class="site-footer-bottom-top">
				<div class="region region-footer-bottom site-footer-bottom">
				    <div class="site-footer-bottom__copyright">
					© SlamBase
				    </div>
				    <nav role="navigation"
					 aria-labelledby="block-theodor-footer-menu"
					 id="block-theodor-footer"
					 class="block block-menu navigation menu--footer">
					<h2 class="visually-hidden"
					    id="block-theodor-footer-menu">
					    Footer menu
					</h2>
					<ul class="site-footer-bottom__menu">
					    <li class="site-footer-bottom__menu-item">
						<a href="https://www.slambase.de/Datenschutz">
						    Datenschutz
						</a>
					    </li>
					    <li class="site-footer-bottom__menu-item">
						<a href="https://www.slambase.de/impressum">
						    Impressum
						</a>
					    </li>
					    <li class="site-footer-bottom__menu-item">
						<a href="https://www.slambase.de/kontakt">
						    Kontakt
						</a>
					    </li>
					</ul>
				    </nav>
				</div>
			    </div>
			</div>
		    </div>
		</footer>
	    </div>	    
	);
    }
}

export default Footer;
