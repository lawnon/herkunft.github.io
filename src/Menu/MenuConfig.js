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
	    members: [
		{
		    items: []
		},
	    ]
	};
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
		var itemArray = [];
		// SubItems Initialisieren
		Slot.items.forEach((item, subIdex) => {
		    var itemData = {
			link: item.link,
			titel: item.titel,
		    };
		    itemArray = [...itemArray, itemData] 
		});

		// Menu Slot Initialisieren
		var data = {
		    color: Slot.color,
		    link: Slot.link,
		    content: Slot.content,
		    items: itemArray,
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

    removeItem = (index, subIndex) => {
	var Members = this.state.members;
	
	Members[index].items  = Members[index].items.filter((items, i) => {
	    return i !== subIndex
	});
	
	this.setState({
	    members: Members,
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

    /*Update DOM with new Item Entry */
    handleItemSubmit = (item) => {
	if (item.itemsId < 0
	    || item.itemsId >= this.state.members.length
	    || isNaN(item.itemsId)
	    || item.itemsId == ''){
	    return;
	}
	if (item.itemsId !== null && item.itemsLink != null && item.itemsTitel != null){
	    var today = new Date();
	    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	    var dateTime = date+' '+time;

	    var newItem = {
		link: item.itemsLink,
		titel: item.itemsTitel,
	    };
	    
	    var Members = this.state.members;
	    Members[item.itemsId].items = [...Members[item.itemsId].items, newItem];
	    this.setState({members: Members})
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
		<MenuTable members={members} removeMember={this.removeMember} removeItem={this.removeItem} />
		<MenuForm handleSubmit={this.handleSubmit}
			  handleItemSubmit={this.handleItemSubmit}
			  saveMembers={this.saveMembers} />
	    </div>
	);
    }
}

export default MenuConfig;
