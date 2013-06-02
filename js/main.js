/* E-mail address de-munger */
(function() {
    var to = 'mai' + 'lto' + String.fromCharCode(40+18);
    var m = 'luca.de-feo' + String.fromCharCode(8*8) + 'uvsq.fr';
    $('#mungemail').html('<a href="' + to + m + '">' + m + '</a>');
})();

/* Simple google search box */
/*
(function() {
    $('#search-form').submit(function() {
	document.location.href= 'https://www.google.com/search?q=' + encodeURI([$('#search-field').val(), 'site:defeo.lu'].join('+'));
	return false;
    });
})();
*/

/* Activate popovers */
(function() {
    $('[data-toggle="popover"]').popover();
})();
