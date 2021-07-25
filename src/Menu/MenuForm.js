/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 18.04.2021
 * Discription: Custom MenuForm Component Configurator 
 * Document: MenuForm.js 
 * Template: React tutorials
 */

import React, {Component} from 'react'

class MenuForm extends Component {

    initialState = {
	color: '',
	link: '',
	content: '',
	itemsId: '',
	itemsLink: '',
	itemsTitel: '',
    };
    state = this.initialState;

    handleChange = (event) => {
	this.setState({
	    [event.target.name]: event.target.value,
	});
    }

    submitMember = () => {
	this.props.handleSubmit(this.state);
	this.setState(this.initialState);
    }

    submitItem = () => {
	this.props.handleItemSubmit(this.state);
	this.setState(this.initialState);
    }

    saveForm = () => {
	this.props.saveMembers(this.state);
	this.setState(this.initialState);
    }
    
    render(){
	
	const {color, link, content, itemsId, itemsLink, itemsTitel} = this.state;
	return(
	    <form>
		<div className="divMembers">
		    <h2>Members</h2>
		    <label htmlFor='color'>Color</label>
		    <input type='text'
			   name='color'
			   id='color'
			   value={color}
			   onChange={this.handleChange} />
		    <label htmlFor='link'>Link</label>
		    <input type='text'
			   name='link'
			   id='link'
			   value={link}
			   onChange={this.handleChange} />
		    <label htmlFor='content'>Content</label>
		    <input type='text'
			   name='content'
			   id='content'
			   value={content}
			   onChange={this.handleChange} />
		</div>
		<div className="divItems">
		    <h2>Items</h2>		    
		    <label htmlFor='ID'>Member ID</label>
		    <input type='number'
			   name='itemsId'
			   id='itemsId'
			   value={itemsId}
			   onChange={this.handleChange} />
		    <label htmlFor='Link'>Link</label>
		    <input type='text'
			   name='itemsLink'
			   id='itemsLink'
			   value={itemsLink}
			   onChange={this.handleChange} />
		    <label htmlFor='Titel'>Titel</label>
		    <input type='text'
			   name='itemsTitel'
			   id='itemsTitel'
			   value={itemsTitel}
			   onChange={this.handleChange} />		    
		</div>
		<input type="button" value="Submit Member" onClick={this.submitMember} />
		<input type="button" value="Submit Item" onClick={this.submitItem} />
		<input type='button' value='Save' onClick={this.saveForm} />
	    </form>
	);
    }
}

export default MenuForm;
