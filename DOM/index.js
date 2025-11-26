let heading = document.getElementById('heading');
heading.style.color = "blue";
heading.style.backgroundColor = "lightgray";
// heading.innerHTML = "<p>Welcome to the Homepage through DOM Manipulation!</p>";
// heading.textContent = "<p>Welcome to the Homepage through DOM Manipulation!</p>";
heading.innerText = "<p>Welcome to the Homepage through DOM Manipulation!</p>";
heading.classList.add('firstHeading1', 'mainHeading');
console.log(heading.classList)
heading.classList.remove('mainHeading');
console.log(heading.classList)
heading.classList.replace('firstHeading1', 'firstHeadingReplaced');
console.log(heading.classList)
heading.classList.toggle('firstHeadingReplaced');
console.log(heading.classList)
heading.classList.toggle('firstHeadingReplaced');
console.log(heading.classList)

let greet = document.getElementsByClassName('greet');
greet[0].innerHTML = "Hello, Users!";


// let paragraphs = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].innerHTML = "This is paragraph number " + (i + 1) + " updated using getElementsByTagName.";
// }


let heading1 = document.querySelector('.greet');
heading1.innerHTML = "hello students, welcome to DOM manipulation using querySelector!";

// let paragraph1 = document.querySelectorAll('p');
// paragraph1.forEach((para, index) => {
//     para.innerHTML = "This is paragraph number " + (index + 1) + " updated using querySelectorAll.";
// });


let image1 = document.getElementById('cityImage');
// image1.src = "images/city.jpg";
image1.setAttribute('src', "images/city.jpg")
image1.removeAttribute('id');
console.log(image1.getAttribute('id'));
console.log(image1.hasAttribute('id'));



let italicText = document.getElementById('text');
console.log(italicText.parentElement);
console.log(italicText.parentNode.style.border = "2px solid red");
console.log(italicText.childNodes);
console.log(italicText.children.innerText = "this is italic text updated using children property");