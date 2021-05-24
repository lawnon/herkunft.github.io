/* Copyright � 2021 Akobuije GmbH
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
	items: [],
    };
    state = this.initialState;

    handleChange = (event) => {

	this.setState({
	    [event.target.name]: event.target.value,
	});
    }

    submitForm = () => {
	this.props.handleSubmit(this.state);
	this.setState(this.initialState);
    }

    saveForm = () => {
	this.props.saveMembers(this.state);
	this.setState(this.initialState);
    }
    
    render(){
	
	const {color, link, content} = this.state;

	return(
	    <form>
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
		<input type="button" value="Submit" onClick={this.submitForm} />		
		<input type='button' value='Save' onClick={this.saveForm} />
		</form>
	);
    }
}

export default MenuForm;