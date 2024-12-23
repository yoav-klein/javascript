
const list = document.querySelector('ul');
const insertButton = document.querySelector('.insertButton');
const itemText = document.querySelector('#item');

insertButton.addEventListener('click', () => {
    const newItemName = itemText.value;
    itemText.value = '';

    const newItem = document.createElement('li');
    const itemNameSpan = document.createElement('span');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    itemNameSpan.textContent = newItemName;

    newItem.appendChild(itemNameSpan);
    newItem.appendChild(removeButton);
    list.appendChild(newItem);

    removeButton.addEventListener('click', () => {
        newItem.remove();
    });
});
