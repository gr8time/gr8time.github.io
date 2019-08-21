'use strict';

var pressQuotes = [
  '"...electronic pop songs in the vein of Twin Sister, Sylvan Esso, and Little Dragon."',
  '"...worthy of inclusion in a Terrence Malick film."',
  '"If there weren\'t already a song called Feel Good Hit of the Summer, this would be called that."',
  '"...bridges the sonic gap between Thundercat and Men I Trust."',
  '"...music for breezy climes and sunny days."',
  '"10/10 would jam."',
  '"...infectious, dance-inducing atmosphere."',
  '"...ambient charm to thrashing rock."',
  '"...merges neo-soul with lo-fi hip-hop sensibilities."',
  '"...one of the craziest things we\'ve heard all year."',
  '"...a trippy, headspace-wandering simulation."',
  '"...a multilayered and fascinating band."',

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
  setTimeout(showSlides, 19000);
}

renderFacts();
showSlides();