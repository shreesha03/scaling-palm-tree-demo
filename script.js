document.addEventListener('mousemove', function(e){

    //getting image
    var image = document.getElementById('image');

    //getting cursor pointer value
    var CursorValue = e.screenX;

    image.style.width = 2.15*CursorValue + 'px';
    image.style.height = 'auto';
})

document.addEventListener('mousemove', function(e){
    
    var button = document.getElementsByClassName('epileptic-button')[0];
    buttontext = button.innerHTML;

    if(buttontext == "Epileptic?"){
        var bodyElement = document.querySelector('body');

        //normalize colors within HEX range
        var backgroundhexcolor = Math.round((e.screenX/(window.innerWidth))*999999);

        bodyElement.style.backgroundColor = '#' + backgroundhexcolor;
    }
});

function togglebutton(){

    var button = document.getElementsByClassName('epileptic-button')[0]

    if(button)
    {
        var buttontext = button.innerHTML;

        if (buttontext === "Epileptic?"){
            button.innerHTML = "Not Epileptic?";
            button.style.backgroundColor = "Green";
        }
        else if(buttontext === "Not Epileptic?"){
            button.innerHTML = "Epileptic?";
            button.style.backgroundColor = "Red";
        }
    }
}