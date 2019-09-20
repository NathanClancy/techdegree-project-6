// JavaScript Document
const startScreen = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

//Hide Start Screen
const startButton = document.querySelector("a, btn__reset");
startButton.addEventListener('click', function(){
	startScreen.style.display = 'none';
});

//An Array of phrases
const phrases = [
	"Save a tree",
	"I don’t get it",
	"Save water",
	"I like eggs",
	"I can think"
];


function getRandomPhraseAsArray(arr){
	const phrase = phrases[Math.floor(Math.random() * phrases.length)];
}