function speak(){
    var synth = window.speechSynthesis;
    
    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}

speak();

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach(camera);

if(Content =="take my selfie")
{
    console.log("taking selfie --- ");
    speak();
}

speak_data = "Taking your Seldie in 5 seconds";

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

setTimeout(function()
{
    take_snapshot();
}, 5000);

save();