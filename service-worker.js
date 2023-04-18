'use strict';

// Install
self.addEventListener('install', function(e) {
	console.log('service worker installation');
});

// Activate
self.addEventListener('activate', function(e) {
	console.log('service worker activation');
});
