import React, {Component} from 'react';
import Header from './Header.js';
import Menu from './Menu.js';


class App extends Component{

    render(){
	return(
	    <div class="Application">
		<div class="PageTabs" />
		<div class="PageContainer" style={{paddingTop: "0px"}}> 
		    <Header />
		    <Menu />
		    <div class="afarMark"></div>
		    {/* Main Body */}
		    <div class="afarMark"></div>
		    {/* Footer */}
		</div>
	    </div>
	)	
    }
}

export default App;
