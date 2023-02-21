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
            nxtPost.scrollIntoView({ behavior: 'smooth', block: 'center'});

            // if last convo container is display, show the nxt stage button
            showNxtButton();
        });
    })

    // add event listener to next stage button
    const nxtStageButton = document.querySelector('#nxt-button');
    nxtStageButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("this is click");
        window.location.replace(`/stage4`);
    });
});

function showNxtButton() {
    const lastConvo = document.querySelector('#last-convo-element');
    if(lastConvo.className === 'post-container show') {
        const nxtStageButton = document.querySelector('#nxt-button-container');
        nxtStageButton.className = 'show';
    }
}

function checkUserOption(option, nxtPost) {
    if(option.includes("Yes, I heard it somewhere.") || option.includes("I think...I will go with fashion brand like Jordan?")) {
        const showTheOtherPost = nxtPost.nextElementSibling;
        nxtPost.remove();
        showTheOtherPost.className = 'post-container show';
        showTheOtherPost.scrollIntoView({ behavior: 'smooth', block: 'center'});
    } else {
        nxtPost.className = 'post-container show';
        nxtPost.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
}