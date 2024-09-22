// Select required element
const container = document.querySelector('#container');

// Add red text
const redText = document.createElement("div");
redText.classList.add('red-text');
redText.textContent = "Hey I'm Red!";
container.appendChild(redText);

// Add blue h3 text
const blueTexth3 = document.createElement("h3");
blueTexth3.classList.add('blue-text');
blueTexth3.textContent = "I'm a blue h3!";
container.appendChild(blueTexth3);

// Div black border, pink background
const multiDiv = document.createElement("div");
multiDiv.classList.add('multi-div');

const h1Text = document.createElement("h1");
h1Text.textContent = "I'm in a div";
multiDiv.appendChild(h1Text);

const multiDiv_subText = document.createElement("p");
multiDiv_subText.textContent = "ME TOO!";
multiDiv.appendChild(multiDiv_subText);

container.appendChild(multiDiv);







