(function(){

	var tabsContainer = document.getElementsByClassName('tabs')[0];
	//queyselector devuelve el primero que encuentra('input[type = text]')
	var tabsNavigation = tabsContainer.querySelector('.tabs-navigation'); 
	var tabsContent = tabsNavigation.nextElementSibling; //  (.tasb-content)

	function updateTabs(e , navigation, content){
		
		var idName = 'li' + e.target.hash; // ejm: li#new ( ha sumado los string) ="li#new"
		//el resultado es entre comillado por que es un string y se usa luego como parametro
		e.preventDefault();
		navigation.querySelector('a.selected').classList.remove('selected');
		e.target.classList.add('selected');

		//contenido
		content.querySelector('li.selected').classList.remove('selected');
		content.querySelector(idName).classList.add('selected');

	}

	tabsNavigation.addEventListener('click' , function(event){
		if(event.target.tagName.toLowerCase() === 'a' ){
			updateTabs(event , tabsNavigation , tabsContent); 
			// le paso el evento como parametro para que tenga acceso a este.
		}
	});
})();