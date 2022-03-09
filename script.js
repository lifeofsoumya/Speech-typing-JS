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
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.interimResults = true;      // fetches the result instantly without waiting
    
    let p = document.createElement('p');

    
    recognition.addEventListener('result', (e)=>{
        const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
        console.log(text);
        p.innerText = text;
    })
    
    const texts = document.querySelector(".texts");

    texts.appendChild(p);

recognition.start();

}