document.getElementById("passcode").onclick = function redboi(){
redAlert = document.getElementById("redAlert");
redAlert.style.display = "block";
}

document.getElementById("passcode").onclick = function passcode(){
    var turns = 1;
    
    while (turns > 0) {
    var guess = prompt("Oh no! Somebody's hacking into the mainframe to steal the serverside scripting log! Quick, enter the passcode to sign into the onboard compiler and parse those f*ckers out! \n\nhint: GREAT");
    if (!guess) break;
    if (guess == "TIME" || guess == "time" || guess == "Time") {
        alert('Conglaturation! You stopped the hackers!');
        break;
    }else {
        alert('Dang it! Lost em again. Better luck next time, kid.');
        break;
    } 
    }
 
    redAlert.style.display = "none"
}
    
    