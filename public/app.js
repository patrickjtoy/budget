// For any third party dependencies, like jQuery, place them in the vendor/js folder.

// Configure loading modules from the lib directory, except for 'app' ones, which are in a sibling directory.
requirejs.config({
	baseUrl: '/',
	paths: {
		jquery: 'vendor/js/jquery.min',
		app: 'app'
	}
});

requirejs(["app/main"]);
