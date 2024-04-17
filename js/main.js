window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }
  document.getElementById('sosButton').addEventListener('click', () => {
    navigator.vibrate([100, 100, 100, 300, 300,300, 100, 100, 100]);
  });

document.addEventListener("DOMContentLoaded", function() {
  var sosButton = document.getElementById('sosButton');
  
  sosButton.addEventListener('click', function() {
      // Define the SOS pattern: 3 short, 3 long, 3 short
      var pattern = [200, 200, 200, 200, 600, 200, 600, 200, 600, 200, 200, 200, 200];
      navigator.vibrate(pattern);
  });
});
