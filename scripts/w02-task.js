/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Spencer Varga'

let currentYear = '2024'

let profilePicture = 'images/File_015.jpeg'




/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');






/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = `${currentYear}`;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${fullName}`);







/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'Thai', 'Burgers', 'Rice'];

foodElement.innerHTML += `${favoriteFoods}`

let newFavoriteFood = 'Pie';

favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`








