

var questions = [
	{
		"q": "Are you a declared Design Major?",
		"a": {
			"yes": "Great! Welcome home, let's get started. ",
			"no": "New to the department? Welcome! You'll need to take at least one class off our checklist and get a C or higher to declare. Declaring is important because all of our studio classes are first pass major restricted, so it's almost impossible to get studio classes until you're declared. Click here to check out some non-studio classes offered this quarter."
		}
  },
	{
		"q": "Have you taken your Core Classes? (Design 1, 14, 15, and 16?)",
		"a": {
			"yes": "Nice!",
			"no": "It's important to finish up your Core Classes before you can move on to more advanced studio classes. You should try and take these classes as soon as possible, but in the mean time here are some other, non-studio classes you can take!"
		}
  },
	{
		"q": "Do you know your emphasis?",
		"a": {
			"yes": "Awesome",
			"no": "resources!"
		}
  },
	{
		"q": "Do you want to take a studio or a theroy class?",
		"a": {
			"yes": "Studio",
			"no": "Theory Information"
		}
  }
];

var numQuestion = -1,
	$questions = $('.questions'),
	$response = $('.response');

var loadNewQuestion = function () {
	$questions.text(questions[numQuestion].q);
	$response.html('').removeClass('open');
	$("#next").hide();
	$('input').attr({
		checked: false
	});
	console.log(numQuestion, questions.length);
	if ((numQuestion + 1) === questions.length) {
		$('button').css('display', 'none');
		console.log('last q');
	}
};

$(document).ready(function () {

	numQuestion++;
	loadNewQuestion();

	$('input').on('change', function () {
		var answer = $('input:checked').val();
		$response.addClass('open');
		
			$response.text(questions[numQuestion].a[answer]);
	});

	$('#next').on('click', function () {
		numQuestion++;
		loadNewQuestion();
	});
});

$("#next").hide();

$(document).ready(function(){
    $("#no").click(function(){
        $("#next").hide();
    });
    $("#yes").click(function(){
        $("#next").show();
    });
});

