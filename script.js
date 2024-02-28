runSpeechRecog = () => {
    document.getElementById("output").innerHTML = "Tell me the magic Word...";
    var output = document.getElementById('output');
    var action = document.getElementById('action');
    let recognization = new webkitSpeechRecognition();
    let ent_pass = new webkitSpeechRecognition();
    recognization.onstart = () => {
       action.innerHTML = "Listening...";
    }
    recognization.onresult = (e) => {
       var transcript = e.results[0][0].transcript;
       //output.innerHTML = transcript;
       console.log(transcript);
       if(transcript==="open my activity 2"){
        alert("Log in");
        window.location.href="File_Location";
       }
       else{
        let speech = new SpeechSynthesisUtterance();
        speech.text = "please try again";
        window.speechSynthesis.speak(speech);
        
        
       }
       
       output.classList.remove("hide")
       action.innerHTML = "";
    }
    recognization.start();
 }
