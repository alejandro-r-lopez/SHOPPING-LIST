import './auth/user.js';

import { getItems } from './fetch-utils.js';

const createForm = document.querySelector('create-form');
const addButton = document.querySelector('add-button');
const listSection = document.querySelector('list-section');

let itemsData = [];

window.addEventListener('load', async () => {
    itemsData = await getItems();
    console.log(itemsData);
});

addButton.addEventListener('click');
