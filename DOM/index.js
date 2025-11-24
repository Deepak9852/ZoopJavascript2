let heading = document.getElementById('heading');
heading.style.color = "blue";
heading.style.backgroundColor = "lightgray";
// heading.innerHTML = "<p>Welcome to the Homepage through DOM Manipulation!</p>";
// heading.textContent = "<p>Welcome to the Homepage through DOM Manipulation!</p>";
heading.innerText = "<p>Welcome to the Homepage through DOM Manipulation!</p>";


let greet = document.getElementsByClassName('greet');
greet[0].innerHTML = "Hello, Users!";


let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = "This is paragraph number " + (i + 1) + " updated using getElementsByTagName.";
}


let heading1 = document.querySelector('.greet');
heading1.innerHTML = "hello students, welcome to DOM manipulation using querySelector!";

// let paragraph1 = document.querySelectorAll('p');
// paragraph1.forEach((para, index) => {
//     para.innerHTML = "This is paragraph number " + (index + 1) + " updated using querySelectorAll.";
// });
