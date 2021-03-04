import React, {Component} from 'react';
import Header from './Header.js';


class App extends Component{

    render(){
	return(
	    <div>
		<div class="PageTabs" />
		<div class="PageContainer" style={{paddingTop: "0px"}}> 
		    <Header />
		</div>
	    </div>
	)	
    }
}

export default App;
