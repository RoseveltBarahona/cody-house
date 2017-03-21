(function () {
	var modalTrigger = document.getElementById('modal-trigger');
	var modal = document.getElementById('modal');
	var close = document.getElementById('close-modal');

	modalTrigger.addEventListener('click', function(event){
		event.preventDefault();
		modal.setAttribute('class','is-visible');
	});
	close.addEventListener('click' , function () {
		modal.removeAttribute('class');
	});
})();