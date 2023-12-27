document.addEventListener('mousemove', function(e) {
    // Get the image element
    var image = document.getElementById('image');

    // Calculate the cursor position relative to the center of the image
    var offsetX = e.clientX - image.offsetLeft - image.width / 2;

    // Calculate the new width based on cursor position (proportional increase)
    var newWidth = Math.abs(offsetX) + 100; // Set a base width (e.g., 100px)

    // Set the image size based on cursor position
    image.style.width = newWidth + 'px';
    image.style.height = newWidth + 'px'; // Maintain proportional increase
});

// Reset image size on mouse leave
document.addEventListener('mouseleave', function() {
    var image = document.getElementById('image');
    image.style.width = '100px'; // Set your initial width
    image.style.height = '100px'; // Set your initial height
});
