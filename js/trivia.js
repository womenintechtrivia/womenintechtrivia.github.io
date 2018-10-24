var questionsCount=0;
var totalNoOfQuestions = 3;
var rightAnswerCount = 0;

function displayQuiz() {

	$('#playButton').hide();
	$('#quizDiv').show();
	displayQuizQuestion();
	$('#nextButton').show();
}

function displayQuizQuestion(){
	if(questionsCount >= 1){
		var checkedAns = $('input[name=optradio]:checked').val();
		if(checkedAns === document.getElementById('quizAnswer').innerHTML){
			rightAnswerCount++;
		}
	}
	if(questionsCount == 3){
		$('#quizDiv').hide();
		$('#nextButton').hide();
		$('#quizResults').show();
		$('#quizScore').show();

		document.getElementById('quizScore').innerHTML="SCORE:"+ rightAnswerCount +" / " +totalNoOfQuestions;
	}
	else {
		questionsCount++;
		var randomNum = Math.floor((Math.random() * 3));
		var questionObj = quizData[randomNum];
		//document.getElementById('questionId').innerHTML = questionsCount;
		document.getElementById('questionText').innerHTML = questionsCount+". "+questionObj.question;
		$('#radio1').text(questionObj.questionOpt1);
		document.getElementById('radio11').value = questionObj.questionOpt1;
		$('#radio2').text(questionObj.questionOpt2);
		document.getElementById('radio12').value = questionObj.questionOpt2;
		$('#radio3').text(questionObj.questionOpt3);
		document.getElementById('radio13').value = questionObj.questionOpt3;
		$('#radio4').text(questionObj.questionOpt4);
		document.getElementById('radio14').value = questionObj.questionOpt4;
		document.getElementById('quizAnswer').innerHTML = questionObj.rightAnswer;
	}
	
}

function restartGame(){
	$('#quizResults').hide();
	$('#playButton').show();
	questionsCount=0;
	rightAnswerCount=0;
}