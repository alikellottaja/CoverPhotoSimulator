import jump from './node_modules/jump.js/dist/jump.js';

const imageAreaDesktop = document.getElementById("cover-photo-desktop");
const imageAreaMobile = document.getElementById("cover-photo-mobile");
const desktopImageWrapper = document.getElementById("desktop-container");
const mobileImageContainer = document.getElementById("mobile-image");
const hintText = document.getElementById("hint");

if (window.File && window.FileReader && window.FileList) {
    console.log('Great success! All the File APIs are supported.');
  } else {
    alert('Your browser does not fully support the techniques used on this website (File APIs).');
  }

function previewFile() {
    
    // The button where the user chooses the local image to display
    var file = document.querySelector('input[type=file]').files[0];
    // FileReader instance
    var reader  = new FileReader();

    // When the image is loaded we will set it as source of
    // our img tag
    reader.onloadend = function () {
        //imageAreaMobile.style.visibility = "visible";
        imageAreaDesktop.src = reader.result;
        //imageAreaMobile.src = reader.result;
        mobileImageContainer.style.backgroundImage = 'url(' + reader.result + ')';

        reveal();        
    }
    
    if (file) {
      // Load image as a base64 encoded URI
      reader.readAsDataURL(file);
    } else {
        imageAreaDesktop.src = "";
        mobileImageContainer.style.backgroundImage = 'url(/images/example.png)';
    }
}

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.
    var file = files[0];

    var reader  = new FileReader();

    // When the image is loaded we will set it as source of
    // our img tag
    reader.onloadend = function () {
        //imageAreaMobile.style.visibility = "visible";
        imageAreaDesktop.src = reader.result;
        //imageAreaMobile.src = reader.result;
        mobileImageContainer.style.backgroundImage = 'url(' + reader.result + ')';

        reveal();        
    }
    
    if (file) {
      // Load image as a base64 encoded URI
      reader.readAsDataURL(file);
    } else {
        imageAreaDesktop.src = "";
        mobileImageContainer.style.backgroundImage = 'url(/images/example.png)';
    }
    
  }



function reveal() {
    imageAreaDesktop.style.visibility = "visible";
    desktopImageWrapper.style.cursor = "n-resize";
    hintText.style.visibility = "visible";
    hintText.style.opacity = "1";
    hintText.style.animation = "delay 6s";
    document.getElementById('preview').scrollIntoView();
    jump('.target')
}



function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}


var dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);


// PopUp

const popUpButton = document.getElementById('show-template-btn');
const popUpClose = document.getElementById('close');
const popUp = document.getElementById('example');

function revealExample() {
    popUp.style.position = 'fixed';
    popUp.style.top = '0';
    popUp.style.left = '0';
    popUp.style.opacity = '1';
    popUpClose.style.position = 'fixed';
    popUpClose.style.top = '5px';
    popUpClose.style.right = '5px';
    popUpClose.style.left = 'unset';
}

popUp.addEventListener("click", function( e ) {
    e = window.event || e;
    if(this === e.target) {
        hideExample();
    }
});

 function hideExample() {
    popUp.style.position = 'absolute';
    popUp.style.top = '-5000px';
    popUp.style.left = '-5000px';
    popUp.style.opacity = '0';
    popUpClose.style.position = 'absolute';
    popUpClose.style.top = '-5000px';
    popUpClose.style.right = 'unset';
    popUpClose.style.left = '-5000px';
}