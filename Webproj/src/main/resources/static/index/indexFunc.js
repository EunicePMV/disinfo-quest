document.addEventListener('DOMContentLoaded', function(){

    const startButton = document.querySelector('#start-button');
    startButton.addEventListener('click', function() {
        // display the popup form for the name
        document.querySelector('#username-container').style.display = 'block';
    });

    const userNameBackButton = document.querySelector('#form-back-button');
    userNameBackButton.addEventListener('click', function(e) {
        // stop the page from refreshing
        e.preventDefault();
        // close the popup form for the name
        document.querySelector('#username-container').style.display = 'none';
    });

//    const userNameDoneButton = document.querySelector('#form-done-button');
//    userNameDoneButton.addEventListener('click', function(e) {
//        e.preventDefault();
//
//        // get the user name value
//        // pass the value
//        const userName = document.querySelector('#username-input').value;
//
//        window.location.replace(`/stage1`);
//
//    });

    // when project is click, display the project container
    const project = document.querySelector('#project-text');
    project.addEventListener('click', function(e) {
        document.querySelector('#project-page-container').style.display = 'block';
    });

    // when about is click, display the about container
    const about = document.querySelector('#about-text');
    about.addEventListener('click', function(e) {
        document.querySelector('#about-page-container').style.display = 'block';
    });

    // if back button is click, close the container of this open text
    const backButton = document.querySelectorAll('.back-index-main-button');
    backButton.forEach(button => {
        button.addEventListener('click', function(e) {
            const containerToClose = button.parentNode.parentNode;
            containerToClose.style.display = 'none';
        });
    });
});

//name="${_csrf.parameterName}" value="${_csrf.token}"