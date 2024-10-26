
function showProperties(element) {
    document.getElementById('message').innerHTML = element.alt;
    

    document.getElementById('message').style.backgroundImage = `url(${element.src})`;
    

    console.log("Alt text: " + element.alt);
    console.log("Image source: " + element.src);
}

function undo() {
    
    document.getElementById('message').innerHTML = "Hover over an image to display the alt text.";
    
   
    document.getElementById('message').style.backgroundImage = "url('')";
}