self.addEventListener("install", event => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", event => {
  // na start tylko passthrough
  event.respondWith(fetch(event.request));
});
