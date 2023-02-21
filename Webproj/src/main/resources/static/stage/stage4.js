document.addEventListener('DOMContentLoaded', function() {

    // add event listener to close welcome stage container
    const closeWelcomeStageButton = document.querySelector('#close-button-container');
    closeWelcomeStageButton.addEventListener('click', function(e) {
        const welcomeStageContainer = document.querySelector("#welcome-stage-container");
        welcomeStageContainer.style.display = "none";
    });

    // add event listener to each options in the all post
    const options = document.querySelectorAll('.main-option');
    options.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const userOption = option.innerHTML;

            // create div container for the reply
            const replyContainer = document.createElement('div');
            replyContainer.className = 'reply-content'
            replyContainer.innerHTML = userOption;

            // get the nxt sibling first
            const nxtPost = option.parentNode.parentNode.nextElementSibling;
            const insertReplytoPost = option.parentNode.parentNode.parentNode;

            // insert this before this nxt sibling
            insertReplytoPost.insertBefore(replyContainer, nxtPost);

            option.parentNode.innerHTML = '';

            // check if this option generate other convo
            checkUserOption(option.textContent, nxtPost);

            // if last convo container is display, show the last message
            showNxtButton();
        });
    })

    // add event listener to all click to proceed
    const continueContainers = document.querySelectorAll('.continue-container-proceed');
    continueContainers.forEach(continueContainer => {
        continueContainer.addEventListener('click', function(e) {
            const nxtPost = continueContainer.parentNode.parentNode.nextElementSibling;
            nxtPost.className = 'post-container show';
            nxtPost.scrollIntoView({ behavior: 'smooth', block: 'center'});

            // if last convo container is display, show the last message
            showNxtButton();
        });
    })

    // add event listener to next stage button
    const nxtStageButton = document.querySelector('#nxt-button');
    nxtStageButton.addEventListener('click', function(e) {
        e.preventDefault();

        // show the final message
        showLastMsg();
    });
});

function showLastMsg() {
    const lastConvo = document.querySelector('#last-convo-element');
    if(lastConvo.className === 'post-container show') {
        const finalMsg = document.querySelector('#final-msg-container');
        finalMsg.style.display = 'block';

        // if the back button is click, show the back to menu button
        const backButton = document.querySelector('#close-button-main-final-msg-container');
        backButton.addEventListener('click', function(e) {
            window.location.replace(`/`);
        });
    }
}

function showNxtButton() {
    const lastConvo = document.querySelector('#last-convo-element');
    if(lastConvo.className === 'post-container show') {
        const nxtStageButton = document.querySelector('#nxt-button-container');
        nxtStageButton.className = 'show';
    }
}

function checkUserOption(option, nxtPost) {
    if(option.includes("Yeah, I have enough knowledge about that.") || option.includes("Impersonate a News Site.") || option.includes("Monkeypox can live on door handles and toilet seats for 120 years")) {
        const showTheOtherPost = nxtPost.nextElementSibling;
        nxtPost.remove();
        showTheOtherPost.className = 'post-container show';
        showTheOtherPost.scrollIntoView({ behavior: 'smooth', block: 'center'});
    } else {
        nxtPost.className = 'post-container show';
        nxtPost.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
}