(function(){
	//store our node elements in a variable
	var madalTrigger = document.getElementsByClassName('link-trigger')[0]; 
	var modal = document.getElementById('modal');
	var modalClose = document.getElementById('close-modal');
	var titulo = document.querySelector('[data-name]');

	//detect the click on the anchor tag #modal-trigger
	madalTrigger.addEventListener('click', function(event){
		event.preventDefault();
		//modal.setAttribute('class', 'is-visible');
		modal.classList.add('is-visible');
	});

	//detect the click on the modal close button
	modalClose.addEventListener('click', function(event){
		//close the modal window - remove the is-visible class
		//modal.removeAttribute('class');
		modal.classList.remove('is-visible');
	});

	document.addEventListener('keyup', function(event){
		// console.log(event.which); // console.log(event.keyCode)
		if(event.which === 27){
			modal.removeAttribute('class');
		}/*else if (event.keyCode ===65) {
			alert('tecla aaa');
		}*/
	});

})();