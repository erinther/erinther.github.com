jQuery(document).ready(function($){

	$('body').append('<div id="loading-screen"></div>');
	$('#loading-screen').append('<div id="loading-indicator"></div>')
	$('#loading-screen').css('background-color', $('body').css('background-color'));

	/**************************************
	 * Portfolio (Before Page Load Effects)
	 **************************************/

	// Portfolio configuration
	var max_thumb_rows = 3; // items causing additional rows trigger pagination
	if ($(window).height() < 830) { // if browser viewport indicates smaller screen, show less rows
		var max_thumb_rows = 2;
	}
	
	// Necessary data
	var thumb_space_x = $('.portfolio-thumbs li').width() + parseInt($('.portfolio-thumbs li').css('margin-right'));
	var portfolio_width = $('#portfolio-list').width();
	var thumbs_per_row = Math.floor(portfolio_width / thumb_space_x);
	var max_thumbs_per_page = thumbs_per_row * max_thumb_rows;
	
	// Update thumbnails and controls based on given filter and/or page number
	var portfolio_filtered_urls = [];
	var portfolio_filtered_titles = [];
	var portfolio_filtered_descs = [];
	function updatePortfolio(filter_category, page, no_quicksand) {

		// Is portfolio section display off (lightbox is open)?
		// Display it but invisible so updates work properly
		var temp_portfolio_hide = false;
		if ($(".section-portfolio").is(':hidden')) {
			temp_portfolio_hide = true;
			no_quicksand = true; // no need for effects
			$(".section-portfolio").css('visibility', 'hidden'); // just in case
			$(".section-portfolio").show();
		}
		
		// Temporarily remove rounded corners on thumb containers (Quicksand gets choppy with 'em in place)
		$('.portfolio-thumbs li').addClass('portfolio-square-corners');
	
		// Prepare page number and category filter
		var page = !page ? 1 : parseInt(page);
		
		// Force instantaneous transition of thumbs for IE 7
		if (ie == 7) {
			no_quicksand = true;
		}
	
		// Create temporary hidden UL if there is none (first click)
		if (!$('#portfolio-list-temp').length) {
			$('body').append('<ul id="portfolio-list-temp" class="hidden"></ul>');
		} else {
			$('#portfolio-list-temp').empty(); // empty temp first in case already existed
		}
		
		// Copy LI's that belong to clicked category from master list to temporary list
		var filter_selector = '#portfolio-list-master li'; // all
		if (filter_category) { // specific category
			filter_selector += '[data-categories*="' + filter_category + '"]';
		}
		$(filter_selector).clone().appendTo('#portfolio-list-temp');
		
		// Store data for all pages of filtered data for lightbox navigation
		portfolio_filtered_urls.length = 0; // empty first
		portfolio_filtered_titles.length = 0;
		portfolio_filtered_descs .length = 0;
		$.each($('#portfolio-list-temp li'), function(index, li) { 
			portfolio_filtered_urls[index] = $('a', li).attr('href') ? $('a', li).attr('href') : '';
			portfolio_filtered_titles[index] = $('h2', li).text() ? $('h2', li).text() : '';
			portfolio_filtered_descs[index] = $('.portfolio-description', li).html() ? $('.portfolio-description', li).html() : '';
		});

		// Calculate total and pages based on row limit and category filter
		var total_thumbs = $('#portfolio-list-temp li').length;
		var total_pages = Math.ceil(total_thumbs / max_thumbs_per_page);
		
		// Splice entries for specified page so only those will show
		var splice_start = (page * max_thumbs_per_page) - max_thumbs_per_page;
		var splice_end = splice_start + max_thumbs_per_page - 1;
		if (splice_end > total_thumbs) {
			splice_end = total_thumbs;
		}
		$('#portfolio-list-temp li:lt(' + splice_start + '), #portfolio-list-temp li:gt(' + splice_end + ')').remove();
		
		// Update pagination controls and data
		$('#portfolio-page-current').text(page); // page numbering
		$('#portfolio-page-total').text(total_pages);
		if (total_pages > 1) {

			// Enable display of page numbers
			$('#portfolio-page-numbers, #portfolio-page-buttons').show();
			
			// Disable previous button if on first page
			button_prev_disabled = false;
			$('#portfolio-page-prev').removeClass('page-button-disabled');
			if (page == 1) {
				button_prev_disabled = true;
				$('#portfolio-page-prev').addClass('page-button-disabled');
			}	
			
			// Disable next button if on last page
			button_next_disabled = false;
			$('#portfolio-page-next').removeClass('page-button-disabled');
			if (page == total_pages) {
				button_next_disabled = true;
				$('#portfolio-page-next').addClass('page-button-disabled');
			}	

			// Set new prev and next data on controls
			$('#portfolio-page-prev').attr('data-page', page - 1);
			$('#portfolio-page-next').attr('data-page', page + 1);
			
		} else {
		
			// Hide page controls if only 1 page
			$('#portfolio-page-numbers, #portfolio-page-buttons').hide();
			
		}
	
		// Make sure title overlays are hidden if this is not first load
		if (portfolio_loaded) {
			$('.portfolio-thumb-overlay').hide();
		}
		
		// Show modified list of thumbs with Quicksand effect (http://razorjack.net/quicksand/)
		if (!no_quicksand) {
		
			// Execute the Quicksand replacement effect for thumbs to show filtered/paginated results
			// #portfolio-list items is replaced by hidden #portfolio-list-temp items
			$('#portfolio-list').quicksand($('#portfolio-list-temp li'), {
				duration: 500,
				useScaling: false,
				adjustHeight : 'dynamic' // causes filters/page nav to slide up/down smoothly
			});
			
		} else {
		
			// Instantaneous
			$('#portfolio-list').empty().append($('#portfolio-list-temp li'));

		}
		
		// Re-hide portfolio if were showing it for update purposes (lightbox open)
		if (temp_portfolio_hide) {
			$(".section-portfolio").hide();
			$(".section-portfolio").css('visibility', 'visible');
			temp_portfolio_hide = false;
		}

	}
	
	// Activate title overlay hover effect
	$(".portfolio-thumbs").delegate('li', 'mouseenter', function() {		
		
		if (loading_effects_done) { // don't let hover before page load effect is done
		
			$('.portfolio-thumb-overlay', this)
				.stop(true, true) // helps prevent overlays from getting stuck on super-fast mouse outs
				.fadeIn(fade_speed(300))
				.css('display', 'table'); // to assist w/vertical centering

		}
			
	}).delegate('li', 'mouseleave', function() {
		
		if (loading_effects_done) {			
			$('.portfolio-thumb-overlay', this).hide();
		}			

	});
		
	// Initial portfolio state	
	var portfolio_loaded = false;
	if (!$('#portfolio-list-master').length) {
	
		// Auto-set data-id for each LI as index
		// this is as if we manually set each like <li data-id="1">, 2, 3, etc.
		$('#portfolio-list li').each(function(index) {
			$(this).attr('data-id', index);
		});
	
		// Create master list if there is none
		// this master list remains untouched forever to assist w/filtering and pagination
		$('body').append('<ul id="portfolio-list-master" class="hidden"></ul>');
		$('#portfolio-list li').clone().appendTo('#portfolio-list-master');

		// Limit first page to max thumbs per page, enable pagination if needed
		updatePortfolio(false, 1, true); // no category, page 1, no Quicksand effect
		
		// It's loaded...
		var portfolio_loaded = true;

	}

	// Category filter click
	$('#portfolio-filters a').click(function(event) {
	
		event.preventDefault(); // stop regular click action
		
		// Clicks work only after page load effects are complete
		if (loading_effects_done) {
		
			// Highlight clicked link
			$('#portfolio-filters a').removeClass('portfolio-filter-selected');
			$(this).addClass('portfolio-filter-selected');
			
			// Update thumbnails to match category filter, return to page 1
			updatePortfolio($(this).attr('data-category'));

		}		
		
	});
	
	// Page button click
	$('#portfolio-page-buttons a').click(function(event) {

		// stop regular click action
		event.preventDefault();

		// detect if prev or next based on ID of $(this)
		var button_id = $(this).attr('id');
		var button_direction = button_id == 'portfolio-page-prev' ? 'prev' : 'next';
		
		// if not on page 1 and clicked previous
		// and if not on last page and clicked next
		if (!(button_direction == 'prev' && button_prev_disabled) && !(button_direction == 'next' && button_next_disabled)) {
		
			// Update thumbs and pagination controls based on current filter and page number
			var current_filter = $('.portfolio-filter-selected').attr('data-category');
			var new_page = $(this).attr('data-page');
			updatePortfolio(current_filter, new_page);
				
		}

	});
	
	// Open lightbox on thumbnail click
	// prettyPhoto (http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/)
	var lightbox_opened;
	$().prettyPhoto({ // fire it up
	
		// lightbox config
		opacity: 0, // we hide page content (much better performance), revealing background instead
		default_width: 640, // default size mainly for videos
		default_height: 360,
		horizontal_padding: 10, // enough for border/shadow (makes for nicer transitions)
		slideshow: false, // too many buttons
		allow_resize: true, // enables auto-fit
		overlay_gallery: false, // unnecesary (sometimes buggy)
		deeplinking: false, // unreliable URLs if add/remove images
		social_tools: '', // requires deeplinking
		
		// custom lightbox container
		markup: '<div class="pp_pic_holder"> \
					<div class="pp_content_container"> \
						<div class="pp_content"> \
							<div class="pp_loaderIcon"></div> \
							<div class="pp_fade"> \
								<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
								<div class="pp_hoverContainer"> \
									<a class="pp_next" href="#">next</a> \
									<a class="pp_previous" href="#">previous</a> \
								</div> \
								<div id="pp_full_res"></div> \
								<div class="pp_details"> \
									<div class="ppt">&nbsp;</div> \
									<div class="pp_nav"> \
										<div class="currentTextHolder">0/0</div> \
										<a href="#" class="pp_arrow_previous">Previous</a> \
										<a href="#" class="pp_arrow_next">Next</a> \
										<a class="pp_close" href="#">Close</a> \
									</div> \
									<p class="pp_description"></p> \
								</div> \
							</div> \
						</div> \
					</div> \
				</div> \
				<div class="pp_overlay"></div>',

		/* after image/video changed */
		changepicturecallback: function() {

			// don't fire on first open which user doesn't see (index 0); instead on second when specific clicked image is opened
			if (!lightbox_opened) {
				lightbox_opened = true;
			} else {

				// show rounded corners (they are removed within modified jquery.prettyPhoto.js before transition for better performance)
				$('.pp_content').addClass('rounded_corners');
			
				// go to next/prev page in background if need to
				// is there more than 1 page?
				if ($('#portfolio-page-total').text() > 1) {
				
					// look into portfolio_filtered_urls to see which PAGE that current item's index (set_position) falls on
					var portfolio_item_page = Math.ceil((set_position + 1) / max_thumbs_per_page);
					var portfolio_current_page = $('#portfolio-page-current').text();
					if (portfolio_item_page != portfolio_current_page) { // yep, we're on a new page
						var filter_category = $('.portfolio-filter-selected').attr('data-category');
						updatePortfolio(filter_category, portfolio_item_page, true);  // no Quicksand effect, not seen
					}

				}
				
			}			
			
		},
		
		// after close
		callback: function() {
		
			// re-show page content
			$('#header, #footer, #sections section, #color-switcher').fadeIn(fade_speed(400));
			
			// reload portfolio with current category and page, no Quicksand effect
			// this makes stuck overlay go away (when clicking occured before intro fade out)
			// but more importantly an IE7 issue in which overlay refuses to hide except on mouseover/out again
			updatePortfolio($('.portfolio-filter-selected').attr('data-category'), $('#portfolio-page-current').text(), false); // do use Quicksand effect, so that filter bar moves into proper place

		}
		
	});
	$(".portfolio-thumbs").delegate('a', 'click', function(event) {		
		
		// stop normal click action
		event.preventDefault();

		// build arrays of image data from filtered master list
		$.prettyPhoto.open(portfolio_filtered_urls, portfolio_filtered_titles, portfolio_filtered_descs);

		// hide page content, showing background only - much better performace especially in Chrome
		$('#header, #footer, #sections section, #color-switcher').hide();
		
		// go directly to clicked item
		lightbox_opened = false; // it will be counted as opened after we go to desired image
		portfolio_item_index = (($('#portfolio-page-current').text() - 1) * max_thumbs_per_page) + $(this).parent('li').index(); // index on current page + number of items on pages before it
		$.prettyPhoto.changePage(portfolio_item_index);
		
	});
	
	/**************************************
	 * Page Load Effects (After Portfolio)
	 **************************************/

	// header, footer and sections are hidden via CSS (if JS is enabled) using Modernizr
	// doing it via CSS prevents possible flicker/delay vs hiding here
	
	// give filter contols appearance of being inactive until they can actually be clicked after load effects
	if (!old_ie) { // this is ugly for IE 7/8
		$('#portfolio-controls').fadeTo(0, 0.35);
	}
	
	// which section should we show on load?
	// first section by default or a specific section if #whatever is in URL
	var start_section_id = location.hash && $(location.hash).length ? location.hash.replace('#', '') : $('#sections > section:first-child').attr('id'); // if no existing section given in hash, use first section
	var start_section = $('#' + start_section_id);

	// disable thumbnail hover effect and filter controls until after page load effects are complete
	var loading_effects_done = false;
	var loading_scroll_done = false; // disable menu/scroll until scroll in is done
	
	// Gather images to preload...
	var preload_images = [];
	
		// Get URL of loading indicator image from CSS
		var loading_url = url_from_background_css('#loading-indicator');
		if (loading_url) {
			preload_images.push(loading_url);
		}
	
		// Get URL of background from CSS
		var background_url = url_from_background_css('body');
		if (background_url) {
			preload_images.push(background_url);
		}
		
		// Get URL of thumbnail hover overlay image
		var thumb_overlay_url = url_from_background_css('.portfolio-thumb-overlay');
		if (thumb_overlay_url) {
			preload_images.push(thumb_overlay_url);
		}
		
		// Get URLs of first page of portfolio thumbnails
		$('#portfolio-list li').each(function() {
			var thumb_url = $('img', this).attr('src');
			if (thumb_url) {
				preload_images.push(thumb_url);
			}
		});

	// Show content after loading completes
	function loadContent(phase) {
	
		// Phase 1 (before scroll in)
		if (phase == 1 || !phase) {
	
			// show the header and starting section section now
			$('#header').css('visibility', 'visible');
			start_section.css('visibility', 'visible');
	
			// hide loading screen (contains indicator)
			$('#loading-screen').hide(); // dont fade or performance may get chunky
	
		}
	
		// Phase 2 (after scroll in)
		if (phase == 2 || !phase) {
	
			// show all sections and footer now
			$('#sections > section').css('visibility', 'visible');
			$('#footer').css('visibility', 'visible');
	
			// enable menu/scroll
			loading_scroll_done = true;
			
			// there is a portfolio section
			if ($('.section-portfolio').length) {
			
				// fade thumbnail overlays out after a brief pause
				// also fade in filter controsl
				setTimeout(function() {		
				
					// start fading in controls which will be active in a moment
					$('#portfolio-controls').fadeTo(fade_speed(600), 1);
				
					var portfolio_overlay = $('.portfolio-thumb-overlay');
					var portfolio_title = $('h2', portfolio_overlay);
				
					// hide title text before fade out to help appearance a bit (mainly IE)
					portfolio_title.hide();
					
					// fade out overlay, then...
					portfolio_overlay.fadeOut(fade_speed(800), function() {
					
						// re-show title text after fade out complete(related to hiding above)
						portfolio_title.show();
						
						// enable hover effect after fade out complete
						loading_effects_done = true;					
	
					});	
											
				}, 800); // slight delay
			
			}
			
			// or, if there is no portfolio...
			else {
				loading_effects_done = true;
			}
			
			// Google Map
			initMap();
	
		}
	
	}

	// Preload the images, then show content...
	$("body").imageLoader({
		images: preload_images
	}, function() { // images loaded

		// Slide in effect
		if (!no_scrolling_effects) {

			// Delay helps with smooothness, probably because loaded images still rendering during scroll animation
			setTimeout(function() {
	
				// scroll upward from where?
				if (start_section.next('section').length) { // top of the section below start section
					var below_start_section = start_section.next('section').offset().top;
				} else { // or bottom of document if there is no section below start section
					var below_start_section = $(document).height() - $(window).height();
				}
	
				// move document below start section, then scroll up to it
				$.smoothScroll({
				
					offset: below_start_section,
					speed: 100, // not 0 because that sometimes results in a flicker
					afterScroll: function() { // scroll done
	
						// Phase 1: hide loading overlay, show start section and header bar
						loadContent(1);
								
						// scroll up to start section (usuallly very top unless #whatever is in URL)
						var start_section_y = start_section.length ? start_section.offset().top : 0;
						$.smoothScroll({
						
							offset: start_section_y,
							easing: 'easeOutCirc',
							speed: 1200,
							
							// scroll up is now complete
							afterScroll: function() {
							
								// Phase 2: show all content, trigger portfolio over title fade out
								loadContent(2);
							
							}
							
						});
						
					}
					
				});
			
			}, 1000);

		}

		// No slide in effect (mobile browsers)
		else {
			loadContent(); // show all content
		}
	
	});

	/**************************************
	 * Scroll to Sections
	 **************************************/
	 	
	// jQuery Smooth Scroll Plugin
	// https://github.com/kswedberg/jquery-smooth-scroll
	$('a').click(function(event) { // $('a').smoothScroll() version doesn't work well with Opera

		if (!no_scrolling_effects) { // let anchors work regularly for no scrolling effects

			var hash = this.hash;
		
			if (hash != '' && hash != '#') {
		
				event.preventDefault();
			
				if (loading_scroll_done) { // don't let menu/scroll work until top section scrolls in
	
					$.smoothScroll({
						scrollTarget: this.hash,
						easing: 'easeOutCirc',
						speed: 1200,
						beforeScroll: function() {
							this.stop(); // let animations be interrupted with new target
						},
						afterScroll: function() {
							if (ie != 7) { // IE7 can't handle this nicely
								window.location.hash = hash; // now set the hash so they can copy/paste URL to section
							}
						}
					});
					
				}
	
			}

		}
			
	});
	 
	/**************************************
	 * Testimonials
	 **************************************/

	// Testimonials jQuery Masonry
	$('#testimonials-list').masonry({
		itemSelector: '.testimonial'
	});

	/**************************************
	 * Contact
	 **************************************/

	// Google Map (fired after portfolio loads for performance)
	function initMap() {
	
		// is map being used?
		if ($('#google-map').length) {
		
			// Location Latitude / Longitude
			var latlng = new google.maps.LatLng(32.843331,-117.279379);

			// Load the Map
			var map = new google.maps.Map(document.getElementById('google-map'), {
				zoom: 18,
				mapTypeId: google.maps.MapTypeId.HYBRID, // ROADMAP, SATELLITE or HYBRID
				disableDefaultUI: true, // remove map controls
				center: latlng,
				styles: [{ // hide business name labels
					featureType: "poi",
					stylers: [{
						visibility: "off"
					}]
				}]
			});

			// Custom Marker
			var image = new google.maps.MarkerImage('img/map-icon.png',
				new google.maps.Size(26, 26),
				new google.maps.Point(0,0),
				new google.maps.Point(13, 26));		  
			var shadow = new google.maps.MarkerImage('img/map-icon-shadow.png',
				new google.maps.Size(40, 26),
				new google.maps.Point(0,0),
				new google.maps.Point(13, 26));
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				clickable: false,
				icon: image,
				shadow: shadow
			});
			
		}
		
	}

	// Submit Contact Form
	$('#contact-button').click(function(event) {

		// stop regular click action
		event.preventDefault();

		// submit the form
		$.ajax({
			type: "POST",
			url: "contact-submit.php",
			data: $('#contact-form').serialize(),
			dataType: 'script'
		});
		
	});
	
});

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 **/
(function (a) {
    jQuery.browser.mobile = /android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|opera tablet|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);

// Scrolling effects are disabled for mobile devices
// Opera Mobile and Android browser don't handle scrolling well (loading effects hang)
// Most other mobile browser should benefit from this as well
var no_scrolling_effects = false;
if (jQuery.browser.mobile || screen.width <= 540 || screen.height <= 540) { // if mobile OS/browser or small screen detected
	no_scrolling_effects = true;
}

// Certain effects are disabled for old versions of Internet Explorer
var ie = false;
var old_ie = false;
if (jQuery.browser.msie) {

	ie = parseInt(jQuery.browser.version);
	
	if (ie == 7 || ie == 8) {
		old_ie = true;
	}
	
}

// Extract background-image URL from CSS
function url_from_background_css(el) {

	var background_image = jQuery(el).css('background-image');

	if (background_image && background_image != 'none') {
	
		var background_url = background_image.replace(/["']/g, '').replace(/url\(|\)$/ig, '');

		// IE7/8 have cache issue that can cause a loading hang-up, so bust it for our purposes
		if (old_ie) {
			background_url += '?' + new Date().getTime();
		}
		
		return background_url;
	
	}
	
	return false;

}

// Adjust fade speed values for IE 7 and 8 which give clunky appearance
function fade_speed(v) {

	if (ie == 7 || ie == 8) {
		v = 0; // instant
	}

	return v;

}

/*
Preload Images
Stripped down / modified version of Image Loader 1.2 by Bryan T. Smith
http://orionseven.com/imageloader
MIT License (http://www.opensource.org/licenses/mit-license.php)
*/
jQuery.fn.imageLoader = function(options, callBackFunction) {

    var processed = 0;
	var errors = 0;
    var appendToID = this;
    var images = [];

    for (var i = 0; i < options.images.length; i++) {

        images['img' + i] = new Image();

		jQuery(appendToID).append(function(index, html) {
		
			// when all images have been loaded (or errored), run callback func
			var img = jQuery(images['img' + i]).load(function() {
				processed++;
				if ((options.images.length) == processed && typeof callBackFunction == 'function') {
					callBackFunction.call();
				}	
			}).error(function() {
				processed++;
				if ((options.images.length) == processed && typeof callBackFunction == 'function') {
					callBackFunction.call();
				}
			});

			
			jQuery(img).hide();			
			img.attr({ src: options.images[i] });
			
			return img;
			
		});

    }

    return jQuery(this);

};
