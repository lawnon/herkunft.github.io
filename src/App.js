import React, {Component} from 'react';
import Header from './Header.js';
import Menu from './Menu.js';


class App extends Component{

    render(){
	return(
	    <div className="Application">
		<div className="PageTabs" />
		<div className="PageContainer" style={{paddingTop: "0px"}}> 
		    <Header />
		    <Menu />
		    <div className="afarMark"></div>
		    {/* Main Body */}
		    <div className="afarMark"></div>
		    {/* Footer */}
		</div>
	    </div>
	)	
    }
}

export default App;
