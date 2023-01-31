import './auth/user.js';

import { getItems, createItem } from './fetch-utils.js';
import { renderItem } from './render-utils.js';

const createForm = document.querySelector('.create-form');
const addButton = document.querySelector('.add-button');
const listSection = document.querySelector('.list-section');

let itemsData = [];

window.addEventListener('load', async () => {
    itemsData = await getItems();
    console.log(itemsData);
    displayItems();
});

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newItem = new FormData(createForm);
    await createItem(newItem.get('item'), newItem.get('quantity'));
});

function displayItems() {
    for (let item of itemsData) {
        const newItem = renderItem(item);
        listSection.append(newItem);
    }
}
