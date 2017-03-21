(function(){

	var createNewList = document.getElementById('create-list');
	var placeholderList = getAncestor(createNewList, 'single-list');
	var placeholderListInput = placeholderList.querySelector("input[type='text']"); //var placeholderListInput = createNewList.nextElementSibling;
	var saveNewList = document.getElementById('save-list');

	// FUNCIONES
	function getAncestor(element, ancestorClass){
		var parent = element.parentElement;
		if ( !parent.classList.contains(ancestorClass) ){ //  si el ancestro no contiene la clase da true  y entra al if
			parent = getAncestor(parent,ancestorClass); /* si el ancestro no contiene la clase 
			coge al ancestro y busca sobre su ancestro subiendo en el dom hasta encontrarlo */
		}
		return parent;
	}

	function createList(){
		var newList = document.createElement('li');
	}
	//
	
	createNewList.addEventListener('click' , function(){
		placeholderList.classList.add('editing');
		placeholderListInput.focus();
	});

	saveNewList.addEventListener('click', function(){
		createList();
	});

})();

