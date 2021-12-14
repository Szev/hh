Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90,
});

camera= document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="capturd_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J4rc_j96m/model.json', modelLoaded);

function modelLoaded(){
    console.log('model loaded');
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data= toSpeak;
    var utterThis= new SpeechSynthesisUtterance(seek_data);
    synth.speak(utterThis);
}
function check()
{
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_gesture").innerHTML= results[0].label;
        gesture= results[0].label;
        toSpeak= "";
        if(gesture=="amazing")
        {
            toSpeak= "this is looking amazing";
            document.getElementById("result_gesture").innerHTML= "&#128076;";


        }
        else if(gesture=="best")
        {
            toSpeak= "all the best";
            document.getElementById("result_gesture").innerHTML= "&#128077;";

        }
        else if(gesture=="victory")
        {
            toSpeak= "that was the marvelous victory";
            document.getElementById("result_gesture").innerHTML= "&#9996;";
        }
        speak();
    }
}