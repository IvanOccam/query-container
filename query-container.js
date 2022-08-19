function queryContainerChecker() {
	const queries = {
		"min-width": "minw",
		"minw": "minw",
		"max-width": "maxw",
		"maxw": "maxw",
		"min-height": "minh",
		"minh": "minh",
		"max-height": "maxh",
		"maxh": "maxh"
	}
	function checkAnd(item, element, width, height) {
		for (index in item.and) {
			let i = item.and[index];
			let dimension = width;
			if (i.query.endsWith("h")) dimension = height;
			if (i.query.startsWith("min") && i.value > dimension) {
				element.classList.remove(item.class);
				continue;
			}
			if (i.query.startsWith("max") && i.value < dimension) {
				element.classList.remove(item.class);
				console.log(`${i.value} ${dimension}`);
				continue;
			}
		}
	}
	function checkIndividual(element) { // Encapsulation prevents shit from happening
		let data = JSON.parse(`{'data': ${element.getAttribute("data-query-container")}}`
		  .replaceAll("'", '"')).data;
		let width = element.offsetWidth;
		let height = element.offsetWidth;
		for (index in data) {
			let item = data[index];
			if (!item.value) continue;
			if (!item.query || !item.query in queries) {
				item.query = "minw";
			} else {
				item.query = queries[item.query];
			}
			if (!item.class) item.class = `-${item.query}-${item.value}`;
			let dimension = width;
			if (item.query.endsWith("h")) dimension = height;
			if (item.query.startsWith("min") && item.value <= dimension) {
				element.classList.add(item.class);
				if (item.and) checkAnd(item, element, width, height);
				continue;
			}
			if (item.query.startsWith("max") && item.value >= dimension) {
				element.classList.add(item.class);
				if (item.and) checkAnd(item, element, width, height);
				continue;
			}
			element.classList.remove(item.class);
		}		
	}
	document.querySelectorAll("[data-query-container]").forEach(function(element) {
		checkIndividual(element);
	});	
}

window.addEventListener("resize", function() {
	queryContainerChecker();
});
window.addEventListener("DOMContentLoaded", function() {
	queryContainerChecker();	
});
