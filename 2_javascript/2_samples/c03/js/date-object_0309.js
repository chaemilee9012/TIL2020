// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Create a variable to hold the year this year
var year = today.getFullYear(); 

//getFullYear: 연도 나타냄 ex) 2020

// Create a variable called el to hold the element whose id attribute has a value of footer
var el = document.getElementById('footer');
// Write the year into that element.
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';