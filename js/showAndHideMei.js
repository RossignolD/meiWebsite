	$(document).ready(function () {
        $("#image").hide();
        $("#hide").attr('disabled', true);
        $("#hide").click(function () {
            $("#image").hide();
            $("#hide").attr('disabled', true);
            $("#show").attr('disabled', false);
  
        });
        $("#show").click(function () {
            $("#image").show();
            $("#hide").attr('disabled', false);
            $("#show").attr('disabled', true);
        });
    });
	
	$("#image").hide();
	attr('disabled', true);
	$("#hide").click(function () {
		$("#image").hide();
		$("#hide").attr('disabled', true);
		$("#show").attr('disabled', false);

	});
	$("#show").oclick(function () {
		$("#image").show();
		$("#hide").attr('disabled', false);
		$("#show").attr('disabled', true);
	});