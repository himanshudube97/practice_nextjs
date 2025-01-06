const mainDiv = document.getElementById('main-div');
console.log(mainDiv, "mainDiv")
const button = document.createElement('button', 'add-button');

mainDiv.appendChild(button);
button.innerHTML = 'Click me';
button.onclick = () => {
    const tempDiv = document.createElement('span');
    const removebutton = document.createElement('button', 'remove-button');
    removebutton.innerHTML = 'Remove';
    tempDiv.appendChild(document.createElement('p')).innerHTML = 'Hello World';
    tempDiv.appendChild(removebutton);
    removebutton.onclick = () => {      
        tempDiv.remove();
    }
    mainDiv.appendChild(tempDiv);
}