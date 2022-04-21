export const toggleNavDropdown = () => {
	if (window.innerWidth <= 991) {
		const dropdownLinks = document.querySelectorAll('.dropdown-link');
		for (let i = 0; i < dropdownLinks.length; i++) {
			dropdownLinks[i].addEventListener('click', (e) => {
				e.preventDefault();
				let parent = dropdownLinks[i].parentNode;
				parent.classList.toggle('is-active');
			});
		}
	}
};