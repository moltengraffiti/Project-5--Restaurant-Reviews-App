
//If the browser supports service worker, then register it
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log("Service Worker has been registered successfully!");
    }).catch(function(e) {
      console.log("Couldn't register service worker... \n", e);
    });
  }