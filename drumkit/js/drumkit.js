/*jshint esversion: 6 */
window.addEventListener('keydown',function(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio){
    return;//stop executing the function
}
audio.currentTime =0;
audio.play(); //rewind sound file to beginning
console.log(key);
key.classList.add('playing');


function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if its not a tranform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
});