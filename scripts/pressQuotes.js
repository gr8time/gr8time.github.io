'use strict';

var pressQuotes = [
  '"...worthy of inclusion in a Terrence Malick film."',
  '"...bridges the sonic gap between Thundercat and Men I Trust."',
  '"...music for breezy climes and sunny days."',
  '"10/10 would jam."',
  '"...infectious, dance-inducing atmosphere."',
  '"...ambient charm to thrashing rock."',
  '"...merges neo-soul with lo-fi hip-hop sensibilities."',
  '"...one of the craziest things we\'ve heard all year."',
  '"...a trippy, headspace-wandering simulation."',
  '"...a multilayered and fascinating band."',
  '"Will blast at work tomorrow."',
  '"...catchy and chill."',
  '"This is great."',
  '"...exactly what I’ve been looking for on my search for new music."',
  '"First time hearing, Tha FUNKY BEATS :D"',
  '"Need more of this in 2019."',
  '"Vocals are gorgeous, jam is banging."',
  '"I\'m about to move to PA! That means I can come see you guys live!"',
  '"Reminds me a lot of chromeo. Good music."',
  '"OK, Old Guy here...Dang! this is sweet...congratulations youngsters!"',
  '"This is going straight on my chill out playlist, super funky."',
  '"When you say funk...YOU\'RE NOT PLAYIN\' AROUND!"',
  '"They seem like a bunch of absolute weirdos in the best possible way."',
  '"Chill music, I like it."',
  '"This is the jam."',
  '"This group scratches a Little Dragon itch for me."',
  '"This joint dope."',
  '"Totally dig the groove. Just picked it up on iTunes. Ready for more!!"',
  '"Song is great. Video is fantastic. Thanks for sharing!"',
  '"This just makes me hapoy."',
  '"Definitely adding to my playlist!"',
  '"This would fit in on the GTA Vice City soundtrack."',
  '"dang dis groovy af bro"',
  '"This immediately went on my daily playlist."',
  '"Reminds me a lot of metronomy, love it."',
  '"Streaming their albums and hopping in the pool right now!"',
  '"This is a jam! Added to the summer time playlist."',
  '"Obsessed with them."',
  '"Is this what kids are listening to nowadays?"',
  '"Best music video ever."',
  '"Damn, glad i caught on the hipster hype before this becomes radio blasted everywhere."',
  '"Jamming to this at nearly midnight in a German hostel. Great Time does it again."',
  '"This is one of my favorite songs/music vids of all time, seriously love this stuff."',
  '"I\'m really excited about this band."',
  '"I\'m feelin the vibe..keep it up!!"',
  '"Absolutely love this. Been basically watching it on repeat since I found it."',
  '"Holy sh!t this song is so good!"',
  '"This is so good it’s my new favorite song."',
  '"I subscribed, I can’t wait to see what else you guys come up with."',
  '"This. This is it."',
  '"For once i wasn’t disappointed in youtube recommended."',
  '"This is good, really good, the sound and the video, yes yes yes."',
  '"This is an absolute BANGER i\'m quaking."',
  '"This a full bodied bop, gang."',
  '"This that song to start playing as soon as you get on the freeway out your town."',
  '"This is a heavenly piece of art and I\'m so glad I stumbled upon it."',
  '"ANOTHER great song by gr8™"',
  '"wow I love this"',
  '"<3 I can\'t stop listening to"',
  '"great percussive samples, great album, GREAT TIME."',
  '"I think, i fall in love with your music guys"',
  '"Naise song.. really love the song.whatalovelydaye"'

];

var randomIndex = Math.floor(Math.random() * (pressQuotes.length-1 - 0 + 1)) + 1;
var slideIndex = randomIndex;

function renderFacts() {
  var containerEl = document.getElementById('indexHeadline');
  for (var i = 0; i < pressQuotes.length; i++) {
    var divMyFactEl = document.createElement('div');
    divMyFactEl.setAttribute('class', 'myFact fade');
    containerEl.appendChild(divMyFactEl);
    var divMyFactTextEl = document.createElement('div');
    divMyFactTextEl.setAttribute('class', 'text');
    divMyFactTextEl.textContent = pressQuotes[i];
    divMyFactEl.appendChild(divMyFactTextEl);
  }
}

function showSlides() {
  var slides = document.getElementsByClassName('myFact');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 11000);
}

renderFacts();
showSlides();