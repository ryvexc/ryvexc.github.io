export function getVisibility(element: any): boolean {
	// const element = document.getElementById(elementId.toString());
	const elementTopOffset = element!.offsetTop;
	const elementBottomOffset = element!.offsetHeight + elementTopOffset;
	const screenTopOffset = window.scrollY;
	const screenBottomOffset = screenTopOffset + window.innerHeight;

	if (
		elementBottomOffset > screenTopOffset &&
		screenBottomOffset > elementBottomOffset
	) {
		return true;
	}

	return false;
}
