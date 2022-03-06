const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}


//Вариант с наведением курсора
/* panels.forEach((panel) => {
	panel.addEventListener('mouseover', () => {
		removeActiveClasses();
		panel.classList.add('active');
	});
}); */

//Вариант с кликом 
panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
	});
});
