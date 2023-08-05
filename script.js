// The following variables below are all the sound variables and mute/unmute fucntions 
var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/background-music.mp3"

let backgroundMusicStatus = 0
let backgroundMusicInterval 

function playBackgroundMusic(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
}

function muteBackgroundMusic(){
    if (backgroundMusicStatus == 0){
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/mute.png")
        backgroundMusic.volume = 0
        backgroundMusicStatus++
    } else {
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/unmute.png")
        backgroundMusic.volume = 0.1
        backgroundMusicStatus--
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startTicketInterval(){
    startScreenTimer = setInterval(startGame ,500)
    document.getElementById("right-ticket-img").style.opacity = "0%"
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}

document.getElementById("start-button").addEventListener("click", startTicketInterval)
// END HERE

// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    if (scoreCounter >= 8){
        document.getElementById("pass-end-screen").style.display = "flex"
    } else {
        document.getElementById("fail-end-screen").style.display = "flex"
    }
}
// END HERE

let questionBank = [
    [
        ["Christ", false],
        ["Communion", true],
        ["Completion", false],
        "Spirit of Faith, Zeal for Service, and ____________ in Mission"
    ],
    [
        ["Amen", false],
        ["Forever", true],
        ["Together", false],
        "Live Jesus in our hearts, _____."
    ],
    [
        ["ordinary; uniquely", true],
        ["mundane; extraordinarily", false],
        ["ordinary; extraordinarily", true],
        "Do ___________ things, __________ well."
    ],
    [
        ["Accountable; Imaginative", false],
        ["Responsible; Enthusiastic", false],
        ["Responsible; Innovative", true],
        "Socially ________; Creative and ________"
    ],
    [
        ["1911", false],
        ["1965", false],
        ["1988", true],
        "DLS-CSB was established in ______."
    ],
    [
        ["Greenies", false],
        ["Benilders", false],
        ["Benildeans", true],
        "La Salle - Lasallian; Benilde; ______"
    ],
    [
        ["De La Salle Philippines", true],
        ["De La Salle Manila", false],
        ["Communion of Lasallian Institutions", false],
        "DLS-CSB is one of the educational institutions handled by the _______."
    ],
    [
        ["Principle", false],
        ["Morals", false],
        ["Integrity", true],
        "Excellence with _________ - A Lasallian Core Value that means going beyond what is expected in adherence to ethical standards and principles."
    ],
    [
        ["Thomas Aquinas", false],
        ["John Baptist de La Salle", true],
        ["Benilde Romancon", false],
        "St. _____________________ is the Patron Saint of all those who work in the field of education."
    ],
    [
        ["God-Centered", true],
        ["Academically Excellent", false],
        ["Kind to others", false],
        "Highlighting the importance of conducting a prayer before every class is an expression of being ______________."
    ]
]

function startGame() {
    hideStartScreen()
}

let scoreCounter = 0
let roundIndex = 0

const choiceButtonA = document.getElementById("choice-a")
const choiceButtonB = document.getElementById("choice-b")
const choiceButtonC = document.getElementById("choice-c")

const promptText = document.getElementById("prompt-text")

const scoreDisplay = document.getElementById("score")

function changeDisplay() {
    choiceButtonA.innerHTML = questionBank[roundIndex][0][0]
    choiceButtonB.innerHTML = questionBank[roundIndex][1][0]
    choiceButtonC.innerHTML = questionBank[roundIndex][2][0]
    promptText.innerHTML = questionBank[roundIndex][3]
    score.innerHTML = "SCORE: " + scoreCounter
}

function selectChoiceA() {
    if (roundIndex <= 8 && questionBank[roundIndex][0][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceB() {
    if (roundIndex <= 8 && questionBank[roundIndex][1][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceC() {
    if (roundIndex <= 8 && questionBank[roundIndex][2][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

choiceButtonA.addEventListener("click", selectChoiceA)
choiceButtonB.addEventListener("click", selectChoiceB)
choiceButtonC.addEventListener("click", selectChoiceC)

