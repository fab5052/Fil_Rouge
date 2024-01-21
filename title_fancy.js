function formatTitle(title, currentArray, currentIndex, currentOpts) {
    return '<div id="tip7-title"><span><a href="javascript:;" onclick="$.fancybox.close();"><img src="/data/closelabel.gif" /></a></span>' + (title && title.length ? '<b>' + title + '</b>' : '' ) + 'Image ' + (currentIndex + 1) + ' of ' + currentArray.length + '</div>';
}

$(".tip7").fancybox({
	'showCloseButton'	: false,
	'titlePosition' 		: 'inside',
	'titleFormat'		: formatTitle
});

$("#tip5").fancybox({
	'scrolling'		: 'no',
	'titleShow'		: false,
	'onClosed'		: function() {
	    $("#login_error").hide();
	}
});

$("#login_form").bind("submit", function() {

	if ($("#login_name").val().length < 1 || $("#login_pass").val().length < 1) {
	    $("#login_error").show();
	    $.fancybox.resize();
	    return false;
	}

	$.fancybox.showActivity();

	$.ajax({
		type		: "POST",
		cache	: false,
		url		: "/data/login.php",
		data		: $(this).serializeArray(),
		success: function(data) {
			$.fancybox(data);
		}
	});

	return false;
});

$("#tip3").fancybox({
	'titlePosition'	:	'over',
	'onComplete'	:	function() {
		$("#fancybox-wrap").hover(function() {
			$("#fancybox-title").show();
		}, function() {
			$("#fancybox-title").hide();
		});
	}
});



/*<!--//2. Select all anchor tags that contain image tags

$("a:has(img)").fancybox();

Alternative method - apply Fancybox to only those <a> tags that have href attributes that end with .jpg, .png or .gif:

$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").fancybox();

1. Create gallery from jQuery object collection

$("a.fancybox").attr('rel', 'gallery').fancybox();

-->*/

