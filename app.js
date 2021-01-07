const magicButton = document.getElementById('magic-button')
const userData = document.getElementById('name-button')
const nameOnTag = document.getElementById('new-name')
const changeColorButton = document.getElementById('its-all-magic')
const backgroundColor = document.getElementById('header-tag')
const backgroundColorTwo = document.getElementById('footer-tag')
const nameSpotColor = document.getElementById('name-place')
const theyThem = document.getElementById('they-them')
const sheHer = document.getElementById('she-her')
const heHim = document.getElementById('he-him')
const pronounsOnTag = document.getElementById('pro-nouns')
const clickCounter = document.getElementById('counter')
let count = 1
const textChangeButton = document.getElementById('change-text')





nameOnTag.textContent = userData.value

magicButton.addEventListener('click', () => {
    nameOnTag.textContent = userData.value; 
  
    clickCounter.textContent = count ++;
    updateDisplay();
    
    
});

changeColorButton.addEventListener('click', () => {
    backgroundColor.style.backgroundColor = 'pink'
    backgroundColorTwo.style.backgroundColor = 'pink'
    nameSpotColor.style.backgroundColor = 'chartreuse'

})

theyThem.addEventListener('click', () => {
    pronounsOnTag.textContent = 'they/them'
})

sheHer.addEventListener('click', () => {
    pronounsOnTag.textContent = 'she/her'
})

heHim.addEventListener('click', () => {
    pronounsOnTag.textContent = 'he/him'
})

textChangeButton.addEventListener('click', () => {
    nameOnTag.style.fontFamily = "fantasy"
    pronounsOnTag.style.fontFamily = "fantasy"
})
