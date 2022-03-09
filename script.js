const voiceBtn = document.getElementById('voice-btn')

voiceBtn.addEventListener("click", () => {    
    addAnim();
    convertAudio();    
});

function addAnim(){
    voiceBtn.classList.add("anim");
    document.getElementById('speak-h1').classList.remove("hidden");
}

function convertAudio(){
const texts = document.querySelector(".texts");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = true;      // fetches the result instantly without waiting

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
    console.log(e.results);
})

recognition.start();

}