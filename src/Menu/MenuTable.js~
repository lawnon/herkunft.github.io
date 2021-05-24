import React, {Component} from 'react'

const TableHeader = () => {
    return(
	<thead>
	    <tr>
		<th>Color</th>
		<th>Link</th>
		<th>content</th>
	    </tr>
	</thead>
    );
}

const TableBody = (props) => {
    const rows = props.members.map((row, index) => {
	return (
	    <tr key={index}>
		<td>{row.color}</td>
		<td>{row.link}</td>
		<td>{row.content}</td>
		<td>
		    <button onClick={()=>props.removeMember(index)}>Delete</button>
		</td>
	    </tr>
	);
    });

    return <tbody>{rows}</tbody>
}

const MenuTable = (props) => {

    const {members, removeMember } = props;
    
    return(
	<table>
	    <TableHeader />
	    <TableBody members={members} removeMember={removeMember} />
	</table>
    );
}

export default MenuTable;
