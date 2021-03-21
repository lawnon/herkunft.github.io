import React, {Component} from 'react';
import Header from './Header.js';
import Menu from './Menu.js';
import Main from './Main.js';
import Footer from './Footer.js';


class App extends Component{

    render(){
	return(
	    <div className="Application">
		<div className="PageTabs" />
		<div className="PageContainer" style={{paddingTop: "0px"}}> 
		    {/* Header Component */}
		    <Header />
		    {/* Menu-Navigation Component */}
		    <Menu />
		    <div className="afarMark"></div>
		    {/* Main Body Compnent */}
		    <Main />
		    <div className="afarMark"></div>
		    {/* Footer Component */}
		    <Footer />
		</div>
	    </div>
	)	
    }
}

export default App;
