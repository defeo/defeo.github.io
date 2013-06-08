/* E-mail address de-munger */
$(function() {
    var to = 'mai' + 'lto' + String.fromCharCode(40+18);
    var m = 'luca.de-feo' + String.fromCharCode(8*8) + 'uvsq.fr';
    $('#mungemail').html('<a href="' + to + m + '">' + m + '</a>');
});

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

/* Live page */
$(function() {
    // Hash associated to the folding WhoamI
    var whohash = '#whoami';

    // Detect type of pointing device
    var touch = $('html').is('.touch');

    // Hide the WhoamI block
    var $who = $('#whoami');

    // logic to toggle the WhoamI block
    var semaphore = 'expanded'
    if (window.location.hash != whohash) {
	semaphore = 'shrunk';
	$who.children().toggle();
    }
    var togglewho = function() {
	semaphore = 
	    /shr/.test(semaphore) ? 'expanding' :
	    /exp/.test(semaphore) ? 'shrinking' :
	    semaphore;
	var future = semaphore == 'expanding' ? 'expanded' : 'shrunk'
	$who.children().toggle('fast', function() {
	    // Watch out! This function is fired once per element
	    // in $who.children()
	    if (semaphore[0] == future[0])
		semaphore = future;
	});
    }

    // Attach handlers for the WhoamI block
    $who.on(touch ? 'click' : 'mouseenter mouseleave', function(e) {
	((semaphore == 'shrunk' && e.type != 'mouseleave') ||
	 (semaphore == 'expanded' && e.type != 'mouseenter')) &&
	    togglewho();
    });
    $(window).on('hashchange', function(e) {
	if (window.location.hash == whohash) {
	    /^shr/.test(semaphore) && togglewho();
	} else {
	    /^exp/.test(semaphore) && togglewho();
	}
    });

    /* Keyboard navigation */
    if (!touch) {
	var keys = {};
	$('[data-toggle="key-nav"]').each(function() {
	    var $this = $(this);
	    var k = $this.text().toUpperCase()[0];
	    keys[k.charCodeAt(0)] =  $this.attr('data-hash');
	    $('#key-help .modal-body dl').append('<dt>' + k + '</dt>' + '<dd>' +
						 $this.attr('title') + '</dd>');
	});
	var meta = [16, 17, 18, 91, 225]
	
	var metas = 0;
	$(document).on('keydown keyup', function(e) {
	    if (!metas && e.type == 'keydown') {
		if (e.which in keys)
		    window.location.hash = '#' + keys[e.which];
		else if (e.which == 36)     // Home key
		    window.location.hash = '#';
		else if (e.which == 191) {  // / key
		    console.log('?');
		    $('#key-help').modal('toggle');
		    e.preventDefault();
		} else if (meta.indexOf(e.which) >= 0) {
		    metas++;
		}
	    } else if (metas && e.type == 'keyup' && meta.indexOf(e.which) >= 0) {
		metas--;
	    }
	});
    }
});
