import data from './data.json';

/** @type { HTMLElement } */
const $main = document.body.getElementsByTagName('main')[0];
/** @return { HTMLElement } */
const Create = (tag, parent) => {
	const $ = document.createElement(tag);
	if(parent) 
		parent.append($);
	return $;
}

// Render portals

for(const portal of data.portals) {
	const $section = Create('section', $main);
	const $header = Create('header', $section);
	const $h2 = Create('h2', $header);
	$h2.innerText = portal.name;
	Create('hr', $section);
	const $portalMain = Create('main', $section);
	const $ul = Create('ul', $portalMain);
	for(const entry of portal.entries) {
		/** @type { HTMLAnchorElement } */
		const $a = Create('a', $ul);
		$a.href = entry.href;

		const $li = Create('li', $a);

		const $iconContainer = Create('div', $li);
		$iconContainer.classList.add('icon-container');
		/** @type { HTMLImageElement } */
		const $icon = Create('img', $iconContainer);
		$icon.classList.add('icon');
		$icon.src = entry.icon;

		const $info = Create('div', $li);
		$info.classList.add('info');

		const $name = Create('h3', $info);
		$name.innerText = entry.name;


		const $description = Create('p', $info);
		$description.classList.add('description');
		$description.innerText = entry.description;
	}
}