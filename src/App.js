import React, {Component} from 'react';
import Header from './Header/Header.js';
import Menu from './Menu/Menu.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';


class App extends Component{

    render(){
	return(
	    <div className="Application">
		<div className="PageTabs" />
		<div className="PageContainer" style={{paddingTop: "0px"}}> 
		    {/* Header Component */}
		    <Header />
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
