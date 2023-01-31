import './auth/user.js';

import { getItems, createItem, getUser } from './fetch-utils.js';
import { renderItem } from './render-utils.js';

const createForm = document.querySelector('.create-form');
const listSection = document.querySelector('.list-section');

let itemsData = [];

window.addEventListener('load', async () => {
    itemsData = await getItems();
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
