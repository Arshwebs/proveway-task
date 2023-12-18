let bundleItem = document.querySelectorAll(".bundle-container");
let bundleItemTable = document.querySelectorAll(".bundle-item-table");

//To remove the styles
function remove() {
	bundleItemTable.forEach(node => {
		node.classList.remove("visible");
	});
	bundleItem.forEach(node => {
		node.classList.remove("bundle-active");
	});
}

//To enable the radio button and table
bundleItem.forEach(node => {
	node.addEventListener("click", node => {
		if (node.target.className === "bundle-item-container") {
			node.target.children[0].children[0].checked = true;
			remove();
			node.target.parentElement.classList.add("bundle-active");
			node.target.nextElementSibling.classList.add("visible");
		}
	});
});

document.addEventListener("submit", element => {
	element.preventDefault();
});
