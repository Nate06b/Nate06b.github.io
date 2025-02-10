
console.log('JavaScript is Working');

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const greeting = document.querySelector('#welcome  h2'); // get the greeting element

let welcomeMessage = ''; // default message

if (isMorning) 
{
    welcomeMessage = 'Good Morning! Welcome to the site!';
} 
else if (isAfternoon) 
{
    welcomeMessage = 'Good Afternoon! Welcome to the site!';
} 
else if (isEvening) 
{
    welcomeMessage = 'Good Evening! Welcome to the site!';
}

if (greeting) 
{
    greeting.textContent = welcomeMessage;
}

localStorage.setItem("It's a secret to everybody.", "It's a secret to everybody.");

console.log(localStorage.getItem("It's a secret to everybody."));