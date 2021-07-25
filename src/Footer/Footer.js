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
		<footer className="site-footer"
			role="contentinfo">
		    <div className="site-footer-top-wrapper">
			<div className="inner">          
			</div>
		    </div>
		    <div className="site-footer-middle-wrapper">
			<div className="inner">
			</div>
		    </div>
		    <div className="site-footer-bottom-wrapper">
			<div className="inner">
			    <div className="site-footer-bottom-top">
				<div className="region region-footer-bottom site-footer-bottom">
				    <div className="site-footer-bottom__copyright">
					© SlamBase
				    </div>
				    <nav role="navigation"
					 aria-labelledby="block-theodor-footer-menu"
					 id="block-theodor-footer"
					 className="block block-menu navigation menu--footer">
					<h2 className="visually-hidden"
					    id="block-theodor-footer-menu">
					    Footer menu
					</h2>
					<ul className="site-footer-bottom__menu">
					    <li className="site-footer-bottom__menu-item">
						<a href="https://www.slambase.de/Datenschutz">
						    Datenschutz
						</a>
					    </li>
					    <li className="site-footer-bottom__menu-item">
						<a href="https://www.slambase.de/impressum">
						    Impressum
						</a>
					    </li>
					    <li className="site-footer-bottom__menu-item">
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
