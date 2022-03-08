const voiceBtn = document.getElementById('voice-btn')

voiceBtn.addEventListener("click", addAnim)

function addAnim(){
    voiceBtn.classList.add("anim");
}