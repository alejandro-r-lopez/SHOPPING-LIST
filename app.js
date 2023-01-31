/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

import { getItems } from './fetch-utils.js';

let itemsData = [];

window.addEventListener('load', async () => {
    itemsData = await getItems();
    console.log(itemsData);
});

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */
