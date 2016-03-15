

var questions = [
	{
		"q": "Are you a declared Design Major?",
		"a": {
			"yes": "Great! Welcome home, let's get started. ",
			"no": "New to the department? Welcome! You'll need to take at least one class that's considered a design class and get a C or higher to declare. Declaring is important because all of our studio classes are first pass major restricted, so it's almost impossible to get studio classes until you're declared. In the meantime, you can still start working on some non-studio classes. You'll need to take one of the 40 series as part your lower divison, so consider taking DES 40C (Design for Aesthetics). Looks like Housefield is teaching it this quarter! Another option is completing your design writing requirement (UWP). This quarter, UWP 12 (Writing/Visual Rhetoric) is being offered."
		}
  },
	{
		"q": "Have you taken your Core Classes? (Design 1, 14, 15, and 16?)",
		"a": {
			"yes": "Nice!",
			"no": "It's important to finish up your Core Classes before you can move on to more advanced studio classes. I'd recommend taking DES 1 (Introduction to Design) first. In DES 14 (Drawing) you'll learn important skills in drawing and perspective. If you're interested in more engineering/technical drawing, you may also take DES 21 (Drafting and Perspective) instead of DES 14. DES 15 (Form and Color) will also strengthen your crafting skills. DES 16 (Graphic Design and Technology) will prepare you to be able to create digitally with Illustrator and Photoshop. You should try and take these classes as soon as possible, but in the mean time here are some other, non-studio classes you can take! You'll need to take one of the 40 series as part your lower divison, so consider taking DES 40C (Design for Aesthetics). Looks like Housefield is teaching it this quarter! Another option is completing your design writing requirement (UWP). This quarter, UWP 12 (Writing/Visual Rhetoric) is being offered."
		}
  },
	{
		"q": "Have you taken DES 31 (Photography for Designers)",
		"a": {
			"yes": "Awesome, isn't Barbara cool?",
			"no": "Consider taking it! All designers can only benefit from learning how to photograph and photo manipulate!"
		}
  },
	{
		"q": "Are you interested in taking an Studio Class",
		"a": {
			"yes": "Great, let's check that out",
			"no": "Understandable! Studio classes are time intensive and not everyone can fit them in their schedules every quarter. Looks like we're offering DES 40 (Design for Aesthetics) and DES 149 (Information Design) this quarter. Also, consider taking an independent study if there's an independent project you're interested in working on"
		}
  },
	
	{
		"q": "Design Studio Classes?",
		"a": {
			"yes": "This quarter we are offering lots of studio classes. For the fashion focused, we have DES 70 (Intro Textile Structure), DES 107 (Adv Fashion Design) and DES 171 (Fashion Drawing). For those interested in web and graphic design DES 115 (Letterforms and Type), DES 116 (VisCom: Graphic Design),DES 117 001 (Interactive Media I). In these classes, you will learn the basics of InDesign, HTML/CSS and branding. More advanced graphics classes include, DES 151 (Type in Motion), DES 154 (Message Campaign Design), DES 159 (Design for Understanding), and DES 161 (Screen and Digital Print). In these classes, you will build off your skills in learning After Effects and UX/UI fundamentals. If you are interested in 3-D modeling and product design, consider DES 127B (Studio Practice Sus Des), DES 134A (Intro Interior Design), and DES 137B (Daylight Design Studio). Additionally we have some great CAD (Computer Aided Design) classes- DES 150A (CAD for Designers) and DES 150B (CAD Presentations)",
			"no": "See an Advisor in ART 101!"
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

