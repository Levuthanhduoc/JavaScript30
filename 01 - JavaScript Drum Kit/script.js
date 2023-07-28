let milisecond = 1000;
function setUpEvent(){
    let keys = document.querySelectorAll(".key");
    let sounds = document.querySelectorAll("audio");
    let datakey = 'asdfghjkl';
    keys = Array.from(keys);
    sounds = Array.from(sounds);
    let key_order = 0;
    for(let sound of sounds){
        let key_location = keys[key_order];
        let key_press = datakey[key_order];
        document.addEventListener("keypress",function(e){ 
            if(e.key == key_press){
                sound.play();
                key_location.classList.add("playing");
                setTimeout(function(){key_location.classList.remove("playing")},milisecond/5);
            } 
        })
        key_order++;
    }
    sound_order = 0;
}setUpEvent();