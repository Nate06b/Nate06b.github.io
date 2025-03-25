
// Assignment API Fetch

const randomPokemon = document.getElementById('randomPokemon')

const getRandomPokemon = async () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150) 
    const response = await fetch(url)
    const pokemonObj = await response.json()
    return pokemonObj

}

const renderPokemon = (pokemonObj) => {

    randomPokemon.innerHTML = ""

    const img = document.createElement('img')
    img.src = pokemonObj.sprites.front_default
    img.alt = pokemonObj.name
    randomPokemon.append(img)
}

const LoadRandonPokemon = async () => {
try
{
    const pokemon = await getRandomPokemon()
    renderPokemon(pokemon)
}
catch (error) { alert('Error fetching Pokemon:', error) }
}


window.addEventListener('load', LoadRandonPokemon)



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
 
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')
const nextBtn = document.querySelector('#next')
const previousBtn = document.querySelector('#prev')

let currentImage = 0

const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

// Function to change to the next image
const nextImage = () => {
    currentImage = (currentImage + 1) % urls.length
    showImages()
}

// function to change to the previous image
const previousImage = () => {
    currentImage = (currentImage - 1) % urls.length
    showImages()
}

// Auto slide for 2 seconds
let autoSlide = setInterval(nextImage, 2000)

// Reset the timer when the user clicks on the next or previous button
const resetTimer = () => {
    clearInterval(autoSlide)
    autoSlide = setInterval(nextImage, 2000)
}

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextImage(),
        resetTimer()
    })
    if (previousBtn) previousBtn.addEventListener('click', () =>{
        previousImage(), 
        resetTimer()
    })


showImages()

const todoList = document.getElementById('todo-list')
const todoInput = document.getElementById('new-todo')
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderToDo = () => {
    todoList.innerHTML = ""
    todos.forEach(todo => { // for each input a new list will be created
        const list = document.createElement('li')
        list.className = 'todo' // add class so we can add text to the list
        list.textContent = todo.text // add the text to the list
        todoList.appendChild(list) // adds new list to the ul
    })
}

const addButton = document.getElementById('add-btn');
if (addButton) {
    addButton.addEventListener('click', () => { // add event listener to the button
        if (todoInput.value.trim()) {
            todos.push({ text: todoInput.value.trim(), completed: false }) // add the new input
            localStorage.setItem("todo-list", JSON.stringify(todos)) // save the todo list
            todoInput.value = "" // clear the input
            renderToDo() // call function
        }
    });
}


