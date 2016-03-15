$(document).ready(function () {
	console.log("ready");

	$("#img1").hide();
	$("#img3").hide();
	$("#adventure").hide();
	
    $("#img2").click(function(){
        $("#img1").show();
		$("#greeting").hide();
		$("#img3").show();
		$("#img2").hide();
		$("#adventure").show ();
    });
	});