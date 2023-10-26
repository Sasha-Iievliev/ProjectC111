https://teachablemachine.withgoogle.com/models/eZDT0NBgz/

Webcam.set({
    width : 350,
    height : 300,
    image_format  : "png",
    png_quailty : 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_image' src="+data_uri+">";
    });
}

console.log("ml5 version : ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eZDT0NBgz/model.json", modelloaded);

function modelloaded(){
console.log("modelloaded");
}