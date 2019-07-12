var lyrics = [
    "i was coming out on tuesday",
    "made a break out thru the doorway",
    "found the time to get my hair done",
    "usually never one to care but",
    "i gotta tell you",
    "for the first time",
  ];
  var div = document.getElementById("rushinLyric");
  
  function newLyric(){
      let x = (Math.random() * lyrics.length);
      x = Math.floor(x);
      div.innerHTML = lyrics[x];
      console.log(x);
  }
  
  newLyric();