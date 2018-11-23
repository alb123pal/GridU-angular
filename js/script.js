var isHiddenListArticles = true;
var isHiddenFilterOptions = true;

function showDialog() {
    var listArticlesNode = document.getElementsByClassName('list-articles')[0];
    isHiddenListArticles = !isHiddenListArticles;
    if (!isHiddenListArticles) {
        listArticlesNode.style.display = 'grid';
        document.getElementsByClassName('page-wrapper-content__modal-button')[0].remove();
    }
}

var showHideFilterOptions = function() {
    isHiddenFilterOptions = !isHiddenFilterOptions;
    if (isHiddenFilterOptions) {
        document.getElementsByClassName('filters-panel-wrapper-advanced')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('filters-panel-wrapper-advanced')[0].style.display = 'block';
    }
}

var checkValidation = function(ref) {
    if (ref.type === "text") {
        if (ref.value.length > 5) {
            ref.parentElement.classList.add('error');
            ref.parentElement.children[2].src = '../assets/login-invalid.svg';
        } else {
            ref.parentElement.classList.remove('error');
            ref.parentElement.children[2].src = '../assets/login-inactive.svg';
        }
    } else {
        if (ref.value.length > 5) {
            ref.parentElement.classList.add('error');
            ref.parentElement.children[2].src = '../assets/password-invalid.svg';
        } else {
            ref.parentElement.classList.remove('error');
            ref.parentElement.children[2].src = '../assets/password-inactive.svg';
        }
    }
}

var deleteItem = function() {
    document.getElementsByClassName('modal-items')[0].style.display = 'block';
    document.getElementsByClassName('modal-item-delete')[0].style.display = 'grid';
}

var confirmDelete = function() {
    document.getElementsByClassName('modal-items')[0].style.display = 'none';
    document.getElementsByClassName('modal-item-delete')[0].style.display = 'none';
}

var cancelDelete = function() {
    document.getElementsByClassName('modal-items')[0].style.display = 'none';
    document.getElementsByClassName('modal-item-delete')[0].style.display = 'none';
}

var editItem = function() {
    document.getElementsByClassName('modal-items')[0].style.display = 'block';
    document.getElementsByClassName('modal-item-edit')[0].style.display = 'grid';
}

var confirmEditItem = function() {
    document.getElementsByClassName('modal-items')[0].style.display = 'none';
    document.getElementsByClassName('modal-item-edit')[0].style.display = 'none';
}

var cancelEditItem = function() {
    document.getElementsByClassName('modal-items')[0].style.display = 'none';
    document.getElementsByClassName('modal-item-edit')[0].style.display = 'none';
}