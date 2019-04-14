importScripts(
	"https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js"
);

workbox.routing.registerRoute(
	/\.(?:png|js|css|html|ico|map)$/,
	new workbox.strategies.CacheFirst()
);
