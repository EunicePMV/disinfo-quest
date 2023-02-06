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

    const userNameDoneButton = document.querySelector('#form-done-button');
    userNameDoneButton.addEventListener('click', function(e) {
        e.preventDefault();

        // get the user name value
        const userName = document.querySelector('#username-input').value;

        // redirect to the intro page for PR Manager and pass in the name of the user
//        window.location.replace(`/stage1/${userName}`);
        window.location.replace(`/stage1`);

    });
});