const siteContents 	= document.getElementById("siteContents");
const lessonLinks 	= document.getElementById("lessonLinks");
const labLinks 		= document.getElementById("labLinks");
const pageContents 	= document.getElementById("pageContents");
const showSiteBtn	= document.getElementById("showSiteContents");

let availableLessons = undefined;
let menuExpanded	 = true;

/**
 * Markdown-it config
 */
const md = window.markdownit({
	html: true,
	linkify: true,
});

const jsonResponseHandler = (res) => {
	if (res.status === 200) return res.json();
	throw "An error has occurred while fetching data.";
}

const markdownResponseHandler = (res) => {
	if (res.status === 200) return res.text();
	throw "An error has occurred while fetching data.";
}

const availableLessonDataJsonHandler = (json) => {
	availableLessons = json;
	if (typeof(availableLessons) !== 'undefined') {
		populateSidebar();
	}
}

const lessonDataMarkdownHandler = (markdownData) => {
	pageContents.innerHTML = md.render(markdownData);
}

const defaultErrorHandler = (err) => {
	console.log("An error has occurred: " + err);
}

const switchToLesson = (lessonId) => {
	fetch(`data/lesson${lessonId}.md`)
		.then(markdownResponseHandler)
		.then(lessonDataMarkdownHandler)
		.catch(defaultErrorHandler);
	showSiteContentsClick();
}

const switchToLab = (labId) => {
	fetch(`data/lab${labId}.md`)
		.then(markdownResponseHandler)
		.then(lessonDataMarkdownHandler)
		.catch(defaultErrorHandler);
	showSiteContentsClick();
}

const createLinkNode = (callback, lessonName, id) => {
	const lessonId   = `${id+1}`.padStart(2,0);

	let node = document.createElement("li");
	let link = document.createElement("a");
	link.innerText = `${lessonId} - ${lessonName}`;
	link.addEventListener("click", () => { callback(lessonId) });
	node.appendChild(link);
	return node;
}

const populateSidebar = () => {
	for (let i = 0; i < availableLessons.lessonNames.length; i++) {
		lessonLinks.appendChild(createLinkNode(switchToLesson, availableLessons.lessonNames[i], i));
	}

	for (let i = 0; i < availableLessons.labNames.length; i++) {
		labLinks.appendChild(createLinkNode(switchToLab, availableLessons.labNames[i], i));
	}
}

const slideMenu = () => {
	siteContents.classList.toggle("closed");
}

const showSiteContentsClick = () => {
	if (menuExpanded) {
		showSiteBtn.innerText = "»";
	} else {
		showSiteBtn.innerText = "«";
	}
	slideMenu();
	menuExpanded = !menuExpanded;
}

window.addEventListener("DOMContentLoaded", () => {
	/**
	 * Get Lesson Data, and adjust the availableLessons variable accordingly
	 * on success. On error, report the error.
	 */
	fetch("data/lessonData.json")
		.then(jsonResponseHandler)
		.then(availableLessonDataJsonHandler)
		.catch(defaultErrorHandler);

	showSiteBtn.addEventListener("click", showSiteContentsClick);
});