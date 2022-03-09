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
        const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
        console.log(text);
    p.innerText = text;
    
    texts.appendChild(p);

    if (e.results[0].isFinal) {
        if (text.includes("hi") || text.includes("hello"))  
        {
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "Hello There";
            texts.appendChild(p);
        }
        if (
            text.includes("what's your name") ||
            text.includes("what is your name")
        ) {
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "My Name is MetaTool";
            texts.appendChild(p);
        }
        if (text.includes("open my website")) {
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "opening IndGeek";
            texts.appendChild(p);
            window.open("https://indgeek.com");
        }
        p = document.createElement("p");
        }
    });

    recognition.addEventListener("end", () => {
        recognition.start();
        });

recognition.start();

}