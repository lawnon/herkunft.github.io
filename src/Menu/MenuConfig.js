/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 18.04.2021
 * Discription: Custom Menu Component Configurator 
 * Document: MenuConfig.js 
 * Template: React tutorials
 */

import React, {Component} from 'react';
import MenuTable from './MenuTable.js';
import MenuForm from './MenuForm.js';
import Data from './Menu.json';
import './MenuConfig.css'; 

const WriteUrl = 'http://localhost:5000/write/menu';
const ReadUrl = 'http://localhost:5000/read/menu';

class MenuConfig extends Component{

    constructor(props){	
	super(props);

	// Initialize State
	this.state = {
	    Owner: "Copyright © 2021 Akobuije GmbH",
	    Autor: "Bob-Anyeji Chukwunonso",
	    LastUpdated: "04.03.2021",
	    Discription: "Custom Menu Component with Navigation Interface", 
	    Document: "Menu.js", 
	    Template: "https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst",
	    members: []
	};
		
	// Initialize Data Array
	//Data.members.forEach((Slot, index) => {
	//    var data = {
	//	color: Slot.color,
	//	link: Slot.link,
	//	content: Slot.content,
	//	items: [],
	//    };
	//    dataArray = [...dataArray, data];
	//});
	
	//this.state = {
	//    Owner: "Copyright © 2021 Akobuije GmbH",
	//    Autor: "Bob-Anyeji Chukwunonso",
	//    LastUpdated: "04.03.2021",
	//    Discription: "Custom Menu Component with Navigation Interface", 
	//    Document: "Menu.js", 
	//    Template: "https://heimatkunde.boell.de/de/zwischenraum-fuer-kunst",
	//    members: dataArray
	//};
    }

    componentDidMount() {
	var dataArray = []

	// GET Data from Backend Server Via Fetch
	fetch(ReadUrl,{
	    method: 'GET',
	    headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	    },
	}).then((response) => {
	    return response.json();
	}).then((ResData) => {
	    console.log(ResData);
	    // Initialize Data Array
	    ResData.members.forEach((Slot, index) => {
		var data = {
		    color: Slot.color,
		    link: Slot.link,
		    content: Slot.content,
		    items: [],
		};
		dataArray = [...dataArray, data];
	    });	
	}).then(() => {
	    // Update Dom State
	    this.setState({members: dataArray});
	}).catch((err) => {
	    console.log(err);
	});
    }

    removeMember = (index) => {
	const{members} = this.state
	
	this.setState({
	    members: members.filter((members, i) => {
		return i !== index
	    }),
	});
    }

    /* Update DOM with new data Enty */
    handleSubmit = (member) => {
	if(member.link != "" && member.content != ""){
	    var today = new Date();
	    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	    var dateTime = date+' '+time;
	    
	    this.setState({members: [...this.state.members, member]});
	    this.setState({LastUpdated: dateTime});
	}
    }

    /* Send Https Request to Backend Server */
    saveMembers = (member) => {
	// POST Data to Backend Server Via Fetch
	fetch(WriteUrl,{
	    method: 'POST',
	    headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	    },
	    body: JSON.stringify(this.state)
	}).then((response) => {
	    return console.log(response);
	}).catch((err) => {
	    console.log(err)
	})
    }

    /* Render Menu Config Komponents */
    render(){
	const {members} = this.state;
	
	return(
	    <div className="MenuConfigurator">
		<MenuTable members={members} removeMember={this.removeMember} />
		<MenuForm handleSubmit={this.handleSubmit} saveMembers={this.saveMembers} />
	    </div>
	);
    }
}

export default MenuConfig;
