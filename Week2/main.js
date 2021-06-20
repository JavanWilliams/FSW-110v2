var newHead = document.createElement('h1');
newHead.textContent = 'Welcome to my JS site';
document.body.appendChild(newHead);

var para1 = document.createElement('p');
para1.textContent = 'All this was created with JavaScript';
document.body.appendChild(para1);

var para2 = document.createElement('p');
para2.textContent = 'These are my favorite combat sports';
document.body.appendChild(para2);

var newList = document.createElement('ol');
var itemOne = document.createElement('li');
var itemTwo = document.createElement('li');
var itemThree = document.createElement('li');
document.body.appendChild(newList);
newList.appendChild(itemOne);
newList.appendChild(itemTwo);
newList.appendChild(itemThree);
itemOne.textContent = 'MMA';
itemTwo.textContent = 'Boxing';
itemThree.textContent = 'Kickboxing';



