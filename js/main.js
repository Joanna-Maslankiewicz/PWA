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