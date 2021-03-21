/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 05.03.2021
 * Discription: Custom Header Component Unit Test
 * Document: Header.test.js 
 */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Header from '../Header.js';

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

it('Unit Test: Header.js', () => {
    // Mount Component ot Unit Test Container
    act(() => {
	render(<Header />,container);
    });

    // Initialize and Assert Page Header Role
    var pageHeaderRole = container
	.querySelector('[class="PageHeader"]')
	.getAttribute('role');
    evaluate(pageHeaderRole);
    expect(pageHeaderRole).toEqual('banner');

    // Initialize and Assert Hyper Link
    var hyperLink = container
	.querySelector('div a')
	.getAttribute('href');
    evaluate(hyperLink);
    expect(hyperLink).toEqual('https://www.slambase.de/');

    // Initialize and Assert Hyper Link Target
    var target = container
	.querySelector('div a')
	.getAttribute('target');;
    evaluate(target);
    expect(target).toEqual('_blank');

    // Initialize and Assert Language Link
    var lang = container
	.querySelector('li span');
    evaluate(lang);
    expect(lang.innerHTML).toBe('DE');

    // Initialize and Assert Drop Down Button
    var btnDropdown = container
	.querySelector('[id="btnDropdown"]');
    evaluate(btnDropdown);
    expect(btnDropdown.getAttribute('class')).toEqual('dropButtonWrapper close');
    // Dispatch Click Event
    act(() => {
	btnDropdown.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    });
    expect(btnDropdown.getAttribute('class')).toEqual('dropButtonWrapper open');
});
