var menuItems = document.querySelectorAll('.menu li');

var selectedItem = 0;

function selectItem(index) {
    if (index < 0) {
        index = menuItems.length - 1;
    }
    if (index >= menuItems.length) {
        index = 0;
    }
    menuItems[selectedItem].classList.remove('selected');
    selectedItem = index;
    menuItems[selectedItem].classList.add('selected');
    arrow.style.marginTop = selectedItem * 32 + 'px';
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 38) {
        selectItem(selectedItem - 1);
    } else if (event.keyCode == 40) {
        selectItem(selectedItem + 1);
    } else if (event.keyCode == 13) {
        var selectedLink = menuItems[selectedItem].querySelector('a');
        if (selectedLink) {
            window.location = selectedLink.href;
        }
    }
});
