export const showContentOnLoad = () => {
	const hiddenElements = document.querySelectorAll('.hideOnLoad');
	if (hiddenElements.length) {
		for (let i = 0; i < hiddenElements.length; i++) {
			hiddenElements[i].classList.remove('hidden');
		}
	}
};