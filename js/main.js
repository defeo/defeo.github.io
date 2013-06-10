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
    var hk_tooltip = ['Activate keyboard shortcuts', 'Keyboard shortcuts active']
    $('#hotkeys-btn').click(function() {
	// Deactivate button while we enable
	$(this).prop('disabled', true);
	// Only fill the help modal if this is the first time
	var help = $('#hotkey-help .modal-body');
	var modal;
	if (!help.data('hotkey-filled')) {
	    modal = $('<table class="hotkey-list"></table>').appendTo(help);
	}
	// Toggle hotkeys
	$('[data-toggle="hotkey"]').hotkey('toggle', function(k) {
	    this.toggleClass('hotkey');
	    if (modal) {
		var row = $('<tr>').appendTo(modal);
		k && row.append('<td><code>'
				+ k.toLowerCase().split(' ').join('</code><code>')
				+ '</code></td>');

		var v = this.attr('title');
		v && row.append('<td>' + v + '</td>');
	    }
	});
	// Notify the help modal is filled
	// (works because .hotkey() uses no asynchronous code)
	help.data('hotkey-filled', true);
	// Update button
	$(this).toggleClass('active');
	$(this).attr('title', hk_tooltip.reverse()[0]);
	$(this).removeProp('disabled');
    })
    // Event for ESC key inside forms
    $('input').on('hotkey.blur', function() {
	$(this).blur();
    });
    // Event for help modal
    $(document).on('hotkey.help', function() {
	$('#hotkey-help')
	    .modal('toggle')
	    .css('top', $(document).scrollTop() + 50 + 'px');
    });

    /* If not on a touch device, activate hotkeys */
    if (!touch) {
	$('#hotkeys-btn').click();
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
    
    function hotkeys(callback, on) {
	var event, k =
	    ((event = 'keypress') && this.attr(data.key)) || 
	    ((event = 'keydown') && this.attr(data.special)) || 
	    ((event = 'keypress') && this.text()[0]);

	var selector = this.attr(data.selector) || document;

	if (k) {
	    if (on) {
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
	    } else {
		$(selector).off('keypress' + data.ns + ' keydown' + data.ns);
	    }
	}

	// Notify the callback that we have toggled the hotkey
	if (callback)
	    callback.call(this, k);
    }

    jQuery.fn.extend({
	hotkey: function(action, callback) {
	    if (action == 'on')
		return this.each(function() {
		    hotkeys.call($(this), callback, true);
		    $(this).data(data.on, true)
		});
	    else if (action == 'off')
		return this.each(function() {
		    hotkeys.call($(this), false);
		    $(this).data(data.on, null)
		});
	    else if (action == 'toggle') 
		return this.each(function() {
		    var on = $(this).data(data.on);
		    hotkeys.call($(this), callback, !on);
		    $(this).data(data.on, !on);
		});
	}
    });
})(jQuery);

