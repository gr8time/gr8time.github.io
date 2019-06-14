(function(){
	var keyElements	= document.getElementsByTagName('keysound'),
		i			= keyElements.length,
		keys		= {};
	while (i--){
		var cur		= (keyElements[i].getAttribute('keys')||"").toString().split(''),
			v		= cur.length,
			audio	= keyElements[i].getAttribute('src'),
			caseinsensitive	= keyElements[i].getAttribute('anycase')!==null?true:false,
			regexp	= keyElements[i].getAttribute('regexp')!==null?true:false;
		if (audio){
			while (v--){
        cur[v] = caseinsensitive ? cur[v] : cur[v].toLowerCase();
        
				var src=!regexp?audio:
				audio.replace('${key}', cur[v])
				.replace('${code}', cur[v].charCodeAt(0));
				var ele = document.createElement('audio');
				ele.src = src;
				document.body.appendChild(ele);
				(keys[cur[v]] = keys[cur[v]] || []).push(
					ele
				);
				if (caseinsensitive) {
            
					(keys[cur[v].toUpperCase()] = keys[cur[v].toUpperCase()] || []).push(
						ele
					);
				}
			}
		}
	}
  console.log(keys);
	window.addEventListener('keydown',function(evt){
		var clist	= keys[evt.key] || [],
			clen	= clist.length;
		while (clen--){
			try { clist[clen].play() } catch(e) {}
		}
	});
})();