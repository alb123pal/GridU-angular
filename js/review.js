let tmplReview = document.createElement('template');
tmplReview.innerHTML = `
<link rel="stylesheet" type="text/css" href="../styles/css/review.css">

<div class="add-review-wrapper">
    <div class="upper-layer">
        <div class="upper-layer__background"></div>
        <div class="review-main-info">
            <p>By <span id="userName" class="review-main-info__user-name">Your Name </span><span id="actuallDate"> August 1, 2017</span></p>    
            <div id="displayStars" class="panel-stars">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </div>
        </div>
        <div class="review-content">
            <div id="userImage">
                <img src='../assets/icon_file-yellow.svg' />
            </div>
            <div>
                <p id="displayReview">Start typing and your test will appear here ...</p>
            </div>
        </div>
    </div>
    <div class="bottom-layer">
        <aside class="create-review-panel-left">
            <label>
                <p>Edit your name:</p>
                <input id="name" type="text" name="user" placeholder="Type your name"/>
            </label>
            <label class="create-review-panel-left__input-file">
                <p>Choose your avatar:</p>
                <input type="file" id="avatar" name="avatar"/>
                <div class="create-review-panel-left__file-select">
                    <span>Select Image</span>
                    <img id="selectedImage" src="../assets/icon_file.svg" />
                </div>
            </label>
        </aside>
        <main class="create-review-panel-right">
            <div class="panel-review-upper">
                <span>Write your review:</span>
                <div class="panel-review-upper__rating">
                    <span class="panel-review-upper__rating-text">Rate produkt: </span>
                    <div id="inputStars" class="panel-stars">
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                    </div>
                </div>
            </div>
            <div class="panel-review-comment">
                <textarea id="reviewInput" name="comment"></textarea>
            </div>
            <footer class="panel-buttons">
                <div class="panel-buttons__left">
                    <button id="boldButton" class="button button--grey">Bold</button>
                    <button id="emphasizeButton" class="button button--grey">Emphasize</button>
                    <button id="quoteButton" class="button button--grey">Quote</button>
                </div>
                <div class="panel-buttons__right">
                    <button id="cancelButton" class="button button--grey">Cancel</button>
                    <button id="submitButton" class="button button--green ">Submit</button>
                </div>
            </footer>
        </main>
    </div>
</div>
`;

class Review extends HTMLElement {

    constructor() {
        super();

        let shadowRoot, 
        openReviewButton = document.getElementById('dynamicReviewParagraph'),
        inputName, displayName, inputReview, displayReview, inputAvatar, userImage, selectedImage, inputStars, displayStars,
        emphasizeButton, quoteButton, boldButton, cancelButton, submitButton;
        shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmplReview.content.cloneNode(true));

        getDOMReferenceElements();
        invokeEventListeners();

        function getDOMReferenceElements() {
            inputName = shadowRoot.getElementById('name');
            displayName = shadowRoot.getElementById('userName');

            inputReview = shadowRoot.getElementById('reviewInput');
            displayReview = shadowRoot.getElementById('displayReview');

            userImage = shadowRoot.getElementById('userImage');
            selectedImage = shadowRoot.getElementById('selectedImage');
            inputAvatar = shadowRoot.getElementById('avatar');

            inputStars = shadowRoot.getElementById('inputStars');
            displayStars = shadowRoot.getElementById('displayStars');

            boldButton = shadowRoot.getElementById('boldButton');
            emphasizeButton = shadowRoot.getElementById('emphasizeButton');
            quoteButton = shadowRoot.getElementById('quoteButton');

            cancelButton = shadowRoot.getElementById('cancelButton');
            submitButton = shadowRoot.getElementById('submitButton');
        }

        function invokeEventListeners() {
            openReviewButton.addEventListener('click', openReview);
            inputName.addEventListener('input', changeContentElement.bind(null, displayName, inputName));
            inputReview.addEventListener('input', changeContentElement.bind(null, displayReview, inputReview));
            inputStars.addEventListener('click', addRating);

            inputAvatar.addEventListener('change', loadFile);

            boldButton.addEventListener('click', changeSelectedText.bind(null, 'bold'));
            emphasizeButton.addEventListener('click', changeSelectedText.bind(null, 'emphasize'));
            quoteButton.addEventListener('click', changeSelectedText.bind(null, 'quote'));

            cancelButton.addEventListener('click', cancelReview);
            submitButton.addEventListener('click', saveReview)
        }

        function changeSelectedText(action) {
            if (inputReview.selectionStart == inputReview.selectionEnd) {
                return
            }
            let updateValue, markup, closedMarkup, contentToWrapIndexStart, contentToWrapIndexEnd;

            switch (action) {
                case 'bold':
                    markup = "<strong>";
                    closedMarkup = "</strong>";
                    break;
                case 'emphasize':
                    markup = "<i>";
                    closedMarkup = "</i>";
                    break;
                case 'quote':
                    markup = "<q>";
                    closedMarkup = "</q>";
                    break;
                default: break;
            }

            contentToWrapIndexStart = inputReview.selectionStart;
            contentToWrapIndexEnd = inputReview.selectionEnd;

            updateValue = inputReview.value.substring(0, contentToWrapIndexStart);
            updateValue += markup + inputReview.value.substring(contentToWrapIndexStart, contentToWrapIndexEnd) + closedMarkup;
            updateValue += inputReview.value.substring(contentToWrapIndexEnd);

            inputReview.value = updateValue;
            displayReview.innerHTML = updateValue;
        }

        function addRating(event) {
            let isActiveStar = true;
            displayStars.style.display = 'flex';

            for (var i = 0; i < inputStars.children.length; i++) {

                if (isActiveStar) {
                    inputStars.children[i].classList.add('star--active');
                    displayStars.children[i].classList.add('star--active');
                } else {
                    inputStars.children[i].classList.remove('star--active');
                    displayStars.children[i].classList.remove('star--active');
                }

                if (inputStars.children[i] == event.target) {
                    isActiveStar = false;
                };
            }
        }

        function loadFile(event) {
        let reader = new FileReader();
            reader.onload = () => {
                selectedImage.src = reader.result;
                userImage.children[0].src = reader.result;
        };
            selectedImage.style.opacity = '1';
            reader.readAsDataURL(event.target.files[0]);
        }

        function changeContentElement(display, input) {
            display.innerHTML = input.value;
        }
    
        function openReview() {
            openReviewButton.textContent = 'Share your thoughts with other customers';
            shadowRoot.querySelector('.add-review-wrapper').style.display = 'grid';
        }

        function cancelReview() {
            shadowRoot.querySelector('.add-review-wrapper').style.display = 'none';
            alert('Your review has been removed');
        }

        function saveReview() {
            shadowRoot.querySelector('.add-review-wrapper').style.display = 'none';
            alert('Your review has been added');
        }
    }
}

window.customElements.define('app-review', Review);