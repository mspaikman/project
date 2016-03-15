$(document).ready(function () {
	console.log("ready");

	$("#img1").hide();
	$("#img3").hide();
	
    $("#img2").click(function(){
        $("#img1").show();
		$("#greeting").hide();
		$("#img3").show();
    });
	});