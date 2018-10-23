function displayQuiz() {

	$('#playButton').hide();
	$('#quizDiv').show();
	displayQuizQuestion();
	$('#nextButton').show();
}

function displayQuizQuestion(){
	var randomNum = Math.floor((Math.random() * 3));
	var questionObj = quizData[randomNum];
	document.getElementById('questionText').innerHTML = questionObj.question;
	$('#radio1').text(questionObj.questionOpt1);
	$('#radio2').text(questionObj.questionOpt2);
	$('#radio3').text(questionObj.questionOpt3);
	$('#radio4').text(questionObj.questionOpt4);
}