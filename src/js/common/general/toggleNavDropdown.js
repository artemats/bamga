export const toggleNavDropdown = () => {
	const dropdownLinks = document.querySelectorAll('.dropdown-link');
	if (window.innerWidth <= 991) {
		for (let i = 0; i < dropdownLinks.length; i++) {
			dropdownLinks[i].addEventListener('click', (e) => {
				e.preventDefault();
				let parent = dropdownLinks[i].parentNode;
				parent.classList.contains('is-active')
					? parent.classList.remove('is-active')
					: parent.classList.add('is-active');
			});
		}
	}
};