export const toggleNavDropdown = () => {
	const dropdownLinks = document.querySelectorAll('.dropdown-link');
	for (let i = 0; i < dropdownLinks.length; i++) {
		dropdownLinks[i].addEventListener('click', (e) => {
			e.preventDefault();
			dropdownLinks[i].parentNode.classList.toggle('is-active');
		});
	}
};