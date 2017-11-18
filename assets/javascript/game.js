var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var redRubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var diamondChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var yellowRubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;


function shuffleCrystalValues(){
	redRubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	diamondChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	yellowRubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		$('#win-or-lose').text('You win!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	}
}



$('#random-number').text(computerChoice);



$('#redRuby').on('click', function(){
	userTotalScore += redRubyChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#diamond').on('click', function(){
	userTotalScore += diamondChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#yellowRuby').on('click', function(){
	userTotalScore += yellowRubyChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#emerald').on('click', function(){
	userTotalScore += emeraldChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});