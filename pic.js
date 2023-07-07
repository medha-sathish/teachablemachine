Webcam.set({
    width:350,
    height:300,
    dest_width:350,
    dest_height:300,
    image_format:'png',
    png_quality:100
    });
    Webcam.attach('#camera');
    function clickpic(){
        Webcam.snap(function(data_uri){
            document.getElementById("pic").innerHTML='<img id="picture" src="'+data_uri+'">';
     }) }

    console.log("ml5 version", ml5.version);
test = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3WsmZLVwx/model.json", modelLoaded);
function modelLoaded(){
    console.log("model Loaded");
}
function check(){
    img = document.getElementById("picture");
    test.classify(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
else{
    console.log(results);
    document.getElementById("object").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence;
}
}