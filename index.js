const tagToRemove = document.getElementsByTagName('main')[0];
tagToRemove.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = 'is the champion';
document.body.appendChild(newHeader);