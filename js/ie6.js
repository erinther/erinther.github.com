CFInstall.check({
	preventPrompt: true,
	onmissing: function() {
		alert('Internet Explorer 6 is an outdated browser. Please use a modern browser or install Chrome Frame to use this website with Internet Explorer 6.');
		window.location = 'http://www.google.com/chromeframe?redirect=true'; // redirect=true will send them back to the current page after installation
		
	}
	
});