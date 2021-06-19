/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 07.05.2021
 * Discription: Menu Table Component  
 * Document: MenuTable.js 
 * Template: React Tutorial
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom';

const TableHeader = () => {
    return(
	<thead>
	    <tr>
		<th>ID</th>
		<th>Color</th>
		<th>Link</th>
		<th>content</th>
		<th>***</th>
		<th>Items</th>
	    </tr>
	</thead>
    );
}

const SubTableHeader = () => {
    return(	
	<thead>
	    <tr>
		<th>Link</th>
		<th>Titel</th>
		<th>***</th>
	    </tr>
	</thead>
    );
}

const SubTableBody = (props) => {
    if (props.items == null){
	return null;
    };
    const rows = props.items.map((row, subIndex) => {	
	return (
	    
	    <tr key={subIndex} className="subRow">
		<td>{row.link}</td>
		<td>{row.titel}</td>
		<td>
		    <button onClick={()=>props.removeItem(props.index, subIndex)}>Delete</button>
		</td>
	    </tr>
	);
    });

    return <tbody>{rows}</tbody>
}

const TableBody = (props) => {
    const rows = props.members.map((row, index) => {
	return (
	    <tr key={index} className="Row">
		<td>{index}</td>
		<td>{row.color}</td>
		<td>{row.link}</td>
		<td>{row.content}</td>
		<td>
		    <button onClick={()=>props.removeMember(index)}>Delete</button>
		</td>
		<td className="items">
		    <SubTableHeader />
		    <SubTableBody items={row.items} index={index} removeItem={props.removeItem} />
		</td>
	    </tr>		
	);
    });
				 
    return <tbody>{rows}</tbody>
}

const MenuTable = (props) => {

    const {members, removeMember, removeItem} = props;
    
    return(
	<table>
	    <TableHeader />
	    <TableBody members={members} removeMember={removeMember} removeItem={removeItem} />
	</table>
    );
}

export default MenuTable;
