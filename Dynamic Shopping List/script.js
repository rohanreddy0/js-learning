const btn = document.querySelector('#btn');
const ul_itemsList = document.querySelector('#list-items');
const input_itemInput = document.querySelector('#item-input');


btn.addEventListener('click', () => {
    const inputVal = input_itemInput.value;
    input_itemInput.value = '';

    const itemContainer = document.createElement('div');
    itemContainer.className = "li-container";

    const shoppingListItem = document.createElement('li');

    const delButton = document.createElement('button');


    shoppingListItem.textContent = inputVal;
    itemContainer.appendChild(shoppingListItem);
    itemContainer.appendChild(delButton);

    ul_itemsList.appendChild(itemContainer);

    delButton.textContent = "Delete";

    delButton.addEventListener('click', () => {
        ul_itemsList.removeChild(itemContainer);
    });

    input_itemInput.focus();
});

