//If the browser supports service worker, then register it, display a results message in the console
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function(register) {
      console.log("Service Worker has been registered successfully!");
    })
    .catch(function(e) {
      console.log("Couldn't register service worker... \n", e);
    });
}
