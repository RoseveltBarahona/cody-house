(function() {
    function updateTabs(e, navigation, content) {
        var queryVal = 'li' + e.target.hash;
        e.preventDefault();

        if (!e.target.classList.contains('selected')) { //e.target.classList.contains('selected') === false
            //update the top navigation
            navigation.querySelector('a.selected').classList.remove('selected');
            e.target.classList.add('selected');

            //update tab content
            content.querySelector('li.selected').classList.remove('selected');
            content.querySelector(queryVal).classList.add('selected');
        }
    }

    var tabsContainerList = document.getElementsByClassName('tabs');

    for (var i = 0; i < tabsContainerList.length; i++) {
        (function(i) {
            var tabsContainer = tabsContainerList[i];
            var tabsNavigation = tabsContainer.querySelector('.tabs-navigation');
            var tabsContent = tabsNavigation.nextElementSibling;

            //totalNumberLinks = totalNumberLinks +  tabsNavigation.querySelectorAll('a').length;
            //listent to the click on top nav <a>
            tabsNavigation.addEventListener('click', function(event) {
                if (event.target.tagName.toLowerCase() === 'a') {
                    updateTabs(event, tabsNavigation, tabsContent);
                }
            });
        })(i); // al usar la variable i como closure cre una "instantanea" de todos los estados de [i] x
        		// ejm para :tabsContainerList[i]; si no hacia esto se quedaba con el ultimo valor de i
        		// y solo funcionaba el ultimo grupo de tabs
    }
})();
