document.addEventListener('mousemove', function(e) {
    // Get the image element
    var image = document.getElementById('image');

    // Calculate the cursor position relative to the center of the image
    var offsetX = e.screenX;

    // Set the image width based on cursor position
    image.style.width = 1.9*offsetX + 'px';

    // Set the image height to 'auto'
    image.style.height = 'auto';
});


document.addEventListener('mousemove', function(e){
    var bodyElement = document.querySelector('body');
    
    // Normalize the screenX value to fit within the RGB color range (0-255)
    var normalizedColorValue = Math.round((e.screenX / window.innerWidth) * 999999);

    bodyElement.style.backgroundColor = '#' + normalizedColorValue;
});
