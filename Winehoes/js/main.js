// Fade in for the Home page header text. This peice of code was inspired & adapted from a Copepen by Hayden Mills

$(document).ready(function () {
   $('div.hidden-img').fadeIn(1400).removeClass('hidden');
});

// This function is the hover for the bottles in the Bestsellers section

$('.bottle-boi').on('mouseover',function(){ // Mouse on
    $(this).css("background-color", "#E8D7D0");
});
$('.bottle-boi').on('mouseleave',function(){ // Mouse off
    $(this).css("background-color", "#FCEDE6");
});

// Javascript Quiz. Thanks to AJ for assisting me in developing this quiz.

//onclick = "chooseOption('a');" or "b"

//var questions; // On index.html page under 'Script Quiz' section
var questionNumber = 0; 
var chosenOption = "";

var wines = { // Key with all the choices a user could make.
	"aaaaaa" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"ababab" : ['img/chocolatey-wine-suggestion.jpg',"chocolatey-wine.html"], // The : leads the program to the image that should pop up. 
	"abbaab" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"abaabb" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"], // After the comma is a link that takes you to the corresponding page for the image
	"ababbb" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"abbabb" : ['img/spicy-wine-suggestion.jpg',"spicy-wine.html"],
	"aababb" : ['img/smokey-wine-suggestion.jpg',"smokey-wine.html"],
	"abaaba" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"aabbab" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"abaaab" : ['img/smokey-wine-suggestion.jpg',"smokey-wine.html"],
	"aabaab" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"aaabab" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"aababa" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"], 
	"abbaba" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"ababaa" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"abaaaa" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"aabaaa" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"aaabaa" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"aaaaba" : ['img/chocolatey-wine-suggestion.jpg',"chocolatey-wine.html"],
	"aaaaab" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"abbaaa" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"aabbaa" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"aaabba" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"aaaabb" : ['img/spicy-wine-suggestion.jpg',"spicy-wine.html"],
	"abbbaa" : ['img/chocolatey-wine-suggestion.jpg',"chocolatey-wine.html"],
	"aabbba" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"aaabbb" : ['img/chocolatey-wine-suggestion.jpg',"chocolatey-wine.html"],
	"abbbba" : ['img/smokey-wine-suggestion.jpg',"smokey-wine.html"],
	"aabbbb" : ['img/spicy-wine-suggestion.jpg',"spicy-wine.html"],
	"abbbbb" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"baabaa" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"baaaba" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"abbbab" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"bbbbbb" : ['img/spicy-wine-suggestion.jpg',"spicy-wine.html"],	
	"baabba" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"babbab" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"babbaa" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"bbabaa" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"bbabab" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	'bbaaba' : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"bbabba" : ['img/smokey-wine-suggestion.jpg',"smokey-wine.html"],
	"babbba" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"bbbaba" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"baabab" : ['img/fruity-wine-suggestion.jpg',"fruity-wine.html"],
	"bababa" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"bababb" : ['img/smokey-wine-suggestion.jpg',"smokey-wine.html"],
	"babbbb" : ['img/chocolatey-wine-suggestion.jpg',"chocolatey-wine.html"],
	"bbabbb" : ['img/smokey-wine-suggestion.jpg',"smokey-wine.html"],
	"bbbabb" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"bbbbab" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"bbbbba" : ['img/spicy-wine-suggestion.jpg',"spicy-wine.html"],
	"baabbb" : ['img/chocolatey-wine-suggestion.jpg',"chocolatey-wine.html"],
	"bbaabb" : ['img/smokey-wine-suggestion.jpg',"smokey-wine.html"],
	"bbbaab" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"bbbbaa" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"baaabb" : ['img/chocolatey-wine-suggestion.jpg',"chocolatey-wine.html"],
	"bbaaab" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"bbbaaa" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"baaaab" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
	"bbaaaa" : ['img/salty-wine-suggestion.jpg',"salty-wine.html"],
	"baaaaa" : ['img/creamy-wine-suggestion.jpg',"creamy-wine.html"],
}

function chooseOption(choice) { // This logs your choices to the console & gives your final key (EG. 'You choices so far give the key aababb')
	console.log(choice);
	chosenOption += choice;
	console.log("Your choices so far give the key " + chosenOption);
	if(chosenOption.length == 6) { // chosenOption is = to 6 because there are 6 questions
		//wines
		showWine(chosenOption);
	} else{
		showNextQuestion(); // Shows next question. It's connected to the changing images
	}
}

function showWine(chosenOption) { // THIS IS THE FUNCTION THAT MAKES IMAGES POP UP BITCH
	console.log(wines[chosenOption]);
	var wine = $("<img/>").attr('src',wines[chosenOption][0]);
	hideQuestions();
	$('.quiz-row').prepend(
		$('<a></a>')
		.prepend(wine)
		.attr("href", wines[chosenOption][1])
		);
}

function hideQuestions() { // This function is meant to hide the left and right images 
	$('#first-q img').hide();
	$('#second-q img').hide(); 
}

/*var wrapper = $.attr("href")  { // This is to give the IMAGES A LINK. PREPEND THE WINE TO THIS
	; //??
	window.location.href = 'http://putyourlocationhere/'; // ????????
}*/ 

function showNextQuestion() {
	 console.log("We are now on question " + questionNumber);
	 questionNumber ++;
	 console.log("Question to show next is " + questionNumber);
	 console.log(questions[questionNumber]);
	 $('#first-q img').attr('src', questions[questionNumber].left); // Changing the image on the right on click and at the same time
	 $('#second-q img').attr('src', questions[questionNumber].right); // Changing the image on the left on click and at the same time
}




