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
	/* Add hotkeys from the document */
	var modal = $('<table class="hotkey-list"></table>').appendTo('#hotkey-help .modal-body');
	$('[data-toggle="hotkey"]').hotkey('on', function(k) {
	    this.addClass('hotkey');
	    var row = $('<tr>').appendTo(modal);
	    k && row.append('<td><code>'
			    + k.toLowerCase().split(' ').join('</code><code>')
			    + '</code></td>');

	    var v = this.attr('title');
	    v && row.append('<td>' + v + '</td>');
	});
	// Event for ESC key inside forms
	$('input').on('hotkey.blur', function() {
	    $(this).blur();
	});
	// Event for help modal
	$(document).on('hotkey.help', function() {
	    $('#hotkey-help').modal('toggle');
	});
    }
});


/**
  Hotkeys!

  This jQuery plugin makes it easy to add hotkeys to the document.
*/
(function($) {
    var data = {
	'ns'      : '.hotkeys',
	'on'      : 'hotkeys',
	'key'     : 'data-hotkey',
	'special' : 'data-hotkey-special',
	'selector': 'data-hotkey-selector',
	'href'    : 'href',
	'focus'   : 'data-hotkey-focus',
	'trigger' : 'data-hotkey-trigger',
    };
    
    function hotkeys_on(callback) {
	var event, k =
	    ((event = 'keypress') && this.attr(data.key)) || 
	    ((event = 'keydown') && this.attr(data.special)) || 
	    ((event = 'keypress') && this.text()[0]);

	var selector = this.attr(data.selector) || document;

	if (k) {
	    $(selector).on(event + data.ns, null, k, (function(href, focus, trigger) {
		return function(e) {
		    if (href !== undefined) {
			window.location.href = href;
		    }
		    if (focus !== undefined) {
			$(focus).focus();
		    }
		    if (trigger !== undefined) {
			$(this).trigger(trigger);
		    }
		    e.preventDefault();
		};
	    })(this.attr(data.href),
	       this.attr(data.focus),
	       this.attr(data.trigger)));
	}

	// Notify the callback that we have added a new hotkey
	if (callback)
	    callback.call(this, k);
    }

    function hotkeys_off(callback) {
	var selector = this.attr(data.selector) || document;
	$(selector).off('keypress' + data.ns + ' keydown' + data.ns);
	if (callback)
	    callback.call(this, k);
    }

    jQuery.fn.extend({
	hotkey: function(action, callback) {
	    if (action == 'on')
		return this.each(function() {
		    hotkeys_on.call($(this), callback);
		    $(this).data(data.on, true)
		});
	    else if (action == 'off')
		return this.each(function() {
		    hotkeys_off.call($(this), callback);
		    $(this).data(data.on, null)
		});
	    else if (action == 'toggle') 
		return this.each(function() {
		    var $this = $(this);
		    if ($this.data(data.on)) {
			hotkeys_on.call($this, callback);
			$this.data(data.on, true);
		    } else {
			hotkeys_off.call($this, callback);
			$this.data(data.on, null);
		    }
		});
	}
    });
})(jQuery);

