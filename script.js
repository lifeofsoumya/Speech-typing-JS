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

    var replyText; // text to be replied as chat
    var utterance; // voice to be replied from the chat

    if (e.results[0].isFinal) {
        if (text.includes("hi") || text.includes("hello"))  
        {
            p = document.createElement("p");
            p.classList.add("reply");
            replyText = "Hi there";
            p.innerText = replyText;
            texts.appendChild(p);
            utterance = new SpeechSynthesisUtterance(replyText);
            window.speechSynthesis.speak(utterance)
        }
        if (
            text.includes("where are you from")
        ) {
            p = document.createElement("p");
            p.classList.add("reply");
            replyText = "I'm from MetaTool Lab";
            p.innerText = replyText;
            texts.appendChild(p);
            utterance = new SpeechSynthesisUtterance(replyText);
            window.speechSynthesis.speak(utterance)
        }
        if (
            text.includes("who are you") ||
            text.includes("what are you")
        ) {
            p = document.createElement("p");
            p.classList.add("reply");
            replyText = "I'm a prototype browser Assistant";
            p.innerText = replyText;
            texts.appendChild(p);
            utterance = new SpeechSynthesisUtterance(replyText);
            window.speechSynthesis.speak(utterance)
        }
        if (
            text.includes("who created you") ||
            text.includes("who made you")
        ) {
            p = document.createElement("p");
            p.classList.add("reply");
            replyText = "Soumya created me";
            p.innerText = replyText;
            texts.appendChild(p);
            utterance = new SpeechSynthesisUtterance(replyText);
            window.speechSynthesis.speak(utterance)
        }
        if (
            text.includes("what's your name") ||
            text.includes("what is your name")
        ) {
            p = document.createElement("p");
            p.classList.add("reply");
            replyText = "My Name is MetaTool";
            p.innerText = replyText;
            texts.appendChild(p);
            utterance = new SpeechSynthesisUtterance(replyText);
            window.speechSynthesis.speak(utterance)
        }
        if (text.includes("open my website")) {
            p = document.createElement("p");
            p.classList.add("reply");
            replyText = "opening IndGeek"
            p.innerText = replyText;
            texts.appendChild(p);
            window.open("https://indgeek.com");
            utterance = new SpeechSynthesisUtterance(replyText);
            window.speechSynthesis.speak(utterance)
        }
        p = document.createElement("p");
        }
    });

    recognition.addEventListener("end", () => {
        recognition.start();
        });

recognition.start();

}