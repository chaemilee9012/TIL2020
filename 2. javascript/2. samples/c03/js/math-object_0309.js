// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor((Math.random() * 10) + 1); // == var randomNum = Math.ceil((Math.random() * 10));
//                         0.1 ~ 0.9 
//                                  * 10 → 0 ~ 9
//                                              + 1 → 1 ~ 10

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');
// Write the number into that element
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';