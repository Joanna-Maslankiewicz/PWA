document.addEventListener("DOMContentLoaded", function() {
    var sosButton = document.getElementById('sosButton');
    
    sosButton.addEventListener('click', function() {
        // Define the SOS pattern: 3 short, 3 long, 3 short
        var pattern = [200, 200, 200, 200, 600, 200, 600, 200, 600, 200, 200, 200, 200];
        navigator.vibrate(pattern);
    });
});