// import jump from '/node_modules/jump.js/dist/jump.module.js';
const imageAreaDesktop = document.getElementById("cover-photo-desktop");
const imageAreaMobile = document.getElementById("cover-photo-mobile");
const desktopImageWrapper = document.getElementById("desktop-container");
const desktopImageBg = document.getElementById("desktop-bg");
const mobileImageContainer = document.getElementById("mobile-image");
const hintText = document.getElementById("hint");

if (window.File && window.FileReader && window.FileList) {
    // All the File APIs are supported
  } else {
    alert('Your browser does not fully support the techniques used on this website (File APIs).');
  }

function test(){
    console.log('second function triggered')
}

function previewFile() {
    
    // The button where the user chooses the local image to display
    var file = document.querySelector('input[type=file]').files[0];
    // FileReader instance
    var reader  = new FileReader();
    var fT = file.type;

    if (isImage(file)) {
        // When the image is loaded we will set it as source of
        // our img tag
        reader.onloadend = function () {
        //imageAreaMobile.style.visibility = "visible";
        imageAreaDesktop.src = reader.result;
        //imageAreaMobile.src = reader.result;
        mobileImageContainer.style.backgroundImage = 'url(' + reader.result + ')';

        reveal();

        }

    } else {
        alert('Please provide a valid file type (.jpg, .png or .gif).');
        
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
    var fT = file.type;

    if (fT === 'image/png' || fT === 'image/jpeg' || fT === 'image/jpg' || fT === 'image/gif') {
        // When the image is loaded we will set it as source of
        // our img tag
        reader.onloadend = function () {
        //imageAreaMobile.style.visibility = "visible";
        imageAreaDesktop.src = reader.result;
        //imageAreaMobile.src = reader.result;
        mobileImageContainer.style.backgroundImage = 'url(' + reader.result + ')';

        reveal();

        }

    } else {
        alert('Please provide a valid file type (.jpg, .png or .gif).');
        
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
    desktopImageWrapper.style.backgroundColor = "#fff";
    desktopImageBg.style.backgroundImage = 'none';
    hintText.style.visibility = "visible";
    hintText.style.opacity = "1";
    hintText.style.animation = "delay 6s";
    // document.getElementById('preview').scrollIntoView();
    // jump('.target')
}



 function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}


/* var dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false); */


// PopUp

const popUpButton = document.getElementById('show-template-btn');
const popUpClose = document.getElementById('close');
const popUp = document.getElementById('example');

function revealExample() {
    popUp.style.visibility = 'visible';
    popUp.style.opacity = '1';
}

popUp.addEventListener("click", function( e ) {
    e = window.event || e;
    if(this === e.target) {
        hideExample();
    }
});

 function hideExample() {
    popUp.style.visibility = 'hidden';
    popUp.style.opacity = '0';
}

function isImage(file){
    fT = file.type;
    if (fT === 'image/png' || fT === 'image/jpeg' || fT === 'image/jpg' || fT === 'image/gif'){
        return true;
    }else{
        return false;
    }
}