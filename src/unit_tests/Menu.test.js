/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 06.03.2021
 * Discription: Custom Menu Component Unit Test
 * Document: Menu.test.js 
 */

import React from 'react';
import {render, unmountComponentAtNode } from 'react-dom';
import {act} from 'react-dom/test-utils';
import Menu from '../Menu.js';


let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

function evaluate(val){
    if(val != null){
	console.log(val.toString());
    }else{
	console.log("object is null");
    }
}


it('Unit Test: Menu.js', () => {
    // Mount Component ot Unit Test Container
    act(() => {
	render(<Menu />,container);
    });
    
    // Initialize and Assert Mega Menu Rol
    var megaMenu = container.querySelector('div nav');
    evaluate(megaMenu);
    expect(megaMenu.getAttribute('class')).toEqual('megaMenu');
    expect(megaMenu.getAttribute('role')).toEqual('navigation');
    
    // Initialize, Dispatch and Assert Button Event
    var btnExpand = container.querySelector('[id="btnExpand"]');
    var spanTitle = container.querySelector('[class="hamburgerTitle hamburgerTitleVisible"]');
    evaluate(btnExpand);
    evaluate(spanTitle);
    expect(btnExpand.getAttribute('class')).toEqual('megaMenuButton hamburger hamburgerElastic');
    expect(spanTitle.innerHTML).toBe('Menü');
    // Dispatch Click Event
    act(() => {
	btnExpand.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    // Assert Changes
    expect(megaMenu.getAttribute('class')).toEqual('megaMenu megaMenuExpanded');
    expect(btnExpand.getAttribute('aria-expanded')).toEqual('true');
    expect(spanTitle.getAttribute('class')).toEqual('hamburgerTitle');
});
