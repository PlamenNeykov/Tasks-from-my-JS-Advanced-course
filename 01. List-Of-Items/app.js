function addItem() {
    // select inputfield and read this value
    let inputText = document.getElementById('newItemText').value;
    // create <li> element
    let liElement = document.createElement('li');
    // assign input value to element text content
    liElement.textContent = inputText;
    // select <ul> and append new element
    document.getElementById('items').appendChild(liElement);
    // select input field and clear contents (value)
    document.getElementById('newItemText').value = '';
}