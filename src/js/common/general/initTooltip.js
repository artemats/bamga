export const initTooltip = () => {
	const tooltipElements = document.querySelectorAll('[data-tooltip]');
	for (let i = 0; i < tooltipElements.length; i++) {
		let tooltipValue = tooltipElements[i].dataset.tooltip;
		const tooltip = document.createElement('div');
		tooltip.classList.add('tooltip');
		tooltip.innerHTML = tooltipValue;
		tooltipElements[i].classList.add('tooltip-wrap');
		tooltipElements[i].appendChild(tooltip);
	}
};