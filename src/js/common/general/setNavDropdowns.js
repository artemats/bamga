export const setNavDropdowns = () => {
	const dropdowns = document.querySelectorAll('.nav li ul');
	if (!!dropdowns.length) {
		for (let i = 0; i < dropdowns.length; i++) {
			dropdowns[i].parentNode.classList.add('dropdown');
			dropdowns[i].previousElementSibling.classList.add('dropdown-link');
		}
	}
};