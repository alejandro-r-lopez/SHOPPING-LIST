export function renderItem(item) {
    const itemBox = document.createElement('div');
    const itemThing = document.createElement('p');
    const itemQuantity = document.createElement('p');

    itemThing.textContent = item.item;
    itemQuantity.textContent = item.quantity;

    itemBox.append(itemThing, itemQuantity);
    return itemBox;
}
