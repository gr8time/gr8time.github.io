var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
	
  count += 1000;
  count *= 37;
  button.innerHTML = "POWER METER: " + count;
};
