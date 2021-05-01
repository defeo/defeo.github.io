document.querySelectorAll('.spotlight').forEach(e => {
    let start = parseFloat(e.dataset.start);
    let step = parseFloat(e.dataset.increments);
    let steps = Math.round((1 - start) / step);
    let minrad = parseInt(e.dataset.minrad);
    let slackrad = (parseInt(e.dataset.maxrad) - minrad) / (1 - start);
    let center = e.dataset.center;
    let root = document.querySelector(e.dataset.root);
    const obs = new IntersectionObserver((entries) => {
	//console.log(entries);
	let ratio = Math.max(entries[0].intersectionRatio - start, 0);
	let radius = Math.round(minrad + slackrad * ratio);
	e.style.clipPath = `circle(${radius}px at ${center})`;
    }, {
	root: root,
	rootMargin: e.dataset.margin || '0px',
	threshold: Array(steps + 1).fill(0).map((x,i) => start + i*step),
    });
    obs.observe(e.parentElement);
    window.obs = obs;
});
