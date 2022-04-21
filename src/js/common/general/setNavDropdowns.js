export const setNavDropdowns = () => {
	const dropdowns = document.querySelectorAll('.nav li ul');
	if (!!dropdowns.length) {
		for (let i = 0; i < dropdowns.length; i++) {
			let parent = dropdowns[i].previousElementSibling;
			dropdowns[i].parentNode.classList.add('dropdown');
			parent.classList.contains('dropdown-link')
				? parent.classList.remove('dropdown-link')
				: parent.classList.add('dropdown-link');
		}
	}
};