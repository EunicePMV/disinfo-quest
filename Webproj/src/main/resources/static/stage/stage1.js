document.addEventListener('DOMContentLoaded', function() {
    const backInstructButton = document.querySelector("#back-button-instruct-container");
    backInstructButton.addEventListener('click', function() {
        const instructContainer = document.querySelector("#instruction-container");
        instructContainer.style.display = "none";
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

            // display the nxt convo
            // nxtPost.className = 'post-container show';

            // if last convo container is display, show the nxt stage button
            showNxtButton();
        });
    })

    // add event listener to all click to proceed
    const continueContainers = document.querySelectorAll('.continue-container-proceed');
    continueContainers.forEach(continueContainer => {
        continueContainer.addEventListener('click', function(e) {
            const nxtPost = continueContainer.parentNode.parentNode.nextElementSibling;
            nxtPost.className = 'post-container show';

            // if last convo container is display, show the nxt stage button
            showNxtButton();
        });
    })
});

function showNxtButton() {
    const lastConvo = document.querySelector('#last-convo-element');
    if(lastConvo.className === 'post-container show') {
        const nxtStageButton = document.querySelector('#nxt-button-container');
        nxtStageButton.className = 'show';
    }
}

function checkUserOption(option, nxtPost) {
    if(option.includes("Yeah, somehow.") || option.includes("Face-to-Face classes?")) {
        const showTheOtherPost = nxtPost.nextElementSibling;
        nxtPost.remove();
        showTheOtherPost.className = 'post-container show';
    } else {
        nxtPost.className = 'post-container show';
    }
}