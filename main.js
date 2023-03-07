// Set the webcam
Webcam.set({
    height:350,
    width:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

// Add the webcam to the camera
Webcam.attach('#camera');

// Take snapshot function
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '" + data_uri + "'/>";
    })
}

// Check the ml5.js version
console.log("ml.5 version: ", ml5.version);

// Prepare the model for the webpage
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rDsplTg_d/model.json", modelLoaded);

// Function modelLoaded

function modelLoaded(){
    console.log("Model Loaded");
}