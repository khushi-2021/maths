const toggleDrop = (dropId) => {
	const dropdown = document.getElementById(dropId);

	if (dropdown.style.display == "block") {
		dropdown.style.display = "none";
	} else {
		dropdown.style.display = "block";
	}
};
