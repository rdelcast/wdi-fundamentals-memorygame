console.log("up and running");
	//Card options
	var cards = ["queen","queen","king","king"];
	var cards = [
{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
	var cardInPlay = []
	cardsInPlay.push(cards[cardId])
//Checkformatchfunction
var checkForMatch = function(){
 	if (cardsInPlay[0] === cardsInPlay[1]){
 		alert("You found a match!");
 	} else {
 		alert("Sorry, try again.");
 	}
 //Flipcard function
var flipCard = function(cardID) {
	card = cards[cardID];
	console.log("User flipped " + cards[cardID])
	cardsInPlay.push(cards[cardID]);

var card = cards[cardID];
	console.log("User flipped " + card.rank);
	console.log(card.suit + card.cardImage);
	cardsInPlay.push(card.rank);

if (cardsInPlay.length === 2) {
		checkForMatch();
	}

};
flipcard(0);
flipcard(2);