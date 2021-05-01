class BotKiller {
    constructor(selector='.botkiller') {
	this.revealed = false;
	this.tags = document.querySelectorAll(selector);
	if (this.detect()) {
	    this.reveal();
	} else {
	    this.tags.forEach(t => {
		t.addEventListener('click', () => this.reveal());
		t.addEventListener('mouseover', () => this.reveal());
	    });
	    setTimeout(() => this.reveal(), 5000);
	}
    }

    detect() {
	let returning = localStorage.botkiller !== undefined;
	return returning;
    }
    
    /* Bytewise (ASCII) linear secret sharing */
    share(data) {
	let s = Uint8Array.from(Array.from(data).map(x => x.charCodeAt()));
	let a = Uint8Array.from(s.map(x => Math.random()*256));
	let b = Uint8Array.from(s.map((x,i) => x - a[i]));
	return [a,b];
    }
    
    combine(s1, s2) {
	return String.fromCharCode(...Uint8Array.from(s1.map((x,i) => x + s2[i])));
    }
    
    reveal() {
	if (!this.revealed) {
	    this.tags.forEach(tag => {
		let s1 = Uint8Array.from(tag.dataset.share1.split(','));
		let s2 = Uint8Array.from(tag.dataset.share2.split(','));
		let s = this.combine(s1, s2);
		tag.href = 'mailto:' + s;
		tag.querySelector('span').textContent = s;
	    });
	    localStorage.botkiller = Math.random();
	    this.revealed = true;
	}
    }
}

window.botkiller = new BotKiller();
