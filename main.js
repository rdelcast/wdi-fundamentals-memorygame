console.log("up and running");
	//Card options
	var cards = [
{
		rank: "queen",
		suit: "hearts",
		cardImage: "images 2/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images 2/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images 2/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images 2/king-of-diamonds.png"
	}
];
	var cardInPlay = []
	var score = 0;
var result = document.getElementById("match-or-not");	
var clickedCards = document.getElementsByClassName("clicked");

var flipBack = function (){
	for (var i = 0; i < clickedCards.length; i+=1){
		clickedCards[i].setAttribute("src","images 2/back.png");
	}
};

var delayedFlipBack = function(){
	var timeoutID = window.setTimeout(flipBack, 800);
}

//Checkformatchfunction
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		result.textContent = "You found a match!";
		score += 1;
		document.getElementById("score").textContent = score;
	} else {
		result.textContent = "Sorry, try again.";
		delayedFlipBack();
		}
	cardsInPlay = [];
};


 //Flipcard function
var flipCard = function() {
	var cardId = this.getAttribute("data-id");
	var card = cards[cardId];
	this.setAttribute("src", card.cardImage);
	this.setAttribute("class", "clicked");
	console.log(this);
	cardsInPlay.push(card.rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};
var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i)
		cardElement.addEventListener("click", flipCard);
		var board = document.getElementById("game-board");
		board.appendChild(cardElement);
	}
};


var resetGame = function(){
	score = 0;
	document.getElementById("score").textContent = score;
	result.textContent = "Ready for a new game??";
	flipBack();
};
createBoard();
document.querySelector("button").addEventListener("click", resetGame)