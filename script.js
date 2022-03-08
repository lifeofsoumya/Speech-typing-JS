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
}