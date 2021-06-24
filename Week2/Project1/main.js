//Nav Bar
var nav = document.createElement('nav');
var navList = document.createElement('ul');
var navOne = document.createElement('li');
var navTwo = document.createElement('li');
var navThree = document.createElement('li');

var link1 = document.createElement('a');
//var linkText = document.createTextNode('MMA');
link1.textContent = 'MMA';
//link1.appendChild(linkText);
link1.href = 'http://mma.com'

var link2 = document.createElement('a');
var linkText2 = document.createTextNode('Boxing');
link2.appendChild(linkText2);
link2.href = 'http://kickboxing.com';

var link3 = document.createElement('a');
var linkText3 = document.createTextNode('Kickboxing');
link3.appendChild(linkText3);
link3.href = 'http://ufc.com';

nav.appendChild(navList);
navList.appendChild(navOne);
navList.appendChild(navTwo);
navList.appendChild(navThree);

//navOne.textContent = 'MMA';
//navTwo.textContent = 'Boxing';
//navThree.textContent = 'Kickboxing';

navOne.appendChild(link1);
navTwo.appendChild(link2);
navThree.appendChild(link3);

document.body.appendChild(nav);

/*var nav = document.createElement('nav')
nav.textContent = 'MMA, Boxing, Kickboxing';
nav.setAttribute('id', 'navigation');
document.body.appendChild(nav);
document.getElementById('navigation').style.textAlign = 'center';
document.getElementById('navigation').style.color = 'blue';*/

//h1 element
var headOne = document.createElement('h1');
headOne.textContent = 'The greatest Website ever';
document.body.appendChild(headOne);

//p element
var p = document.createElement('p');
p.textContent = 'Welcome to my site created with Javascript';
document.body.appendChild(p);

//List
var list = document.createElement('ul');
var itemOne = document.createElement('li');
var itemTwo = document.createElement('li');
var itemThree = document.createElement('li');

nav.appendChild(list);
list.appendChild(itemOne);
list.appendChild(itemTwo);
list.appendChild(itemThree);

itemOne.textContent = 'Muay Thai';
itemTwo.textContent = 'BJJ';
itemThree.textContent = 'Wrestling';

document.body.appendChild(list);

var foot = document.createElement('footer');
foot.textContent = 'Leg Kicks Are Underrated';
document.body.appendChild(foot);



