/* E-mail address de-munger */
$(function() {
    var to = 'mai' + 'lto' + String.fromCharCode(40+18);
    var m = 'luca.de-feo' + String.fromCharCode(8*8) + 'uvsq.fr';
    $('#mungemail').html('<a href="' + to + m + '">' + m + '</a>');
});

/* Simple google search box */
/*
$(function() {
    $('#search-form').submit(function() {
	document.location.href= 'https://www.google.com/search?q=' + encodeURI([$('#search-field').val(), 'site:defeo.lu'].join('+'));
	return false;
    });
});
*/

/* Activate popovers */
$(function() {
    $('[data-toggle="popover"]')
	.popover()
	.on('click', function(e) {
	    console.log($(e.target).html());
	    $(this).popover('toggle');
	    e.stopPropagation();
	});
});

/* Folding Whoami section */
$(function() {
    var $who = $('#whoami');
    $who.children().toggle();
    var semaphore = 'shrunk';
    $who.on($('html').is('.touch') ? 'click' : 'mouseleave mouseenter', function(e) {
	((semaphore == 'shrunk' && e.type != 'mouseleave' && (semaphore = 'expanding')) ||
	 (semaphore == 'expanded' && e.type != 'mouseenter' && (semaphore = 'shrinking'))) &&
	    $who.children().toggle('fast', function() {
		// Watch out! This function is fired once per element
		// in $who.children()
		semaphore =
		    semaphore == 'expanding' ? 'expanded' :
		    semaphore == 'shrinking' ? 'shrunk' : semaphore;
	    });
    });
});
