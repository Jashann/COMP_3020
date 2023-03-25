window.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.getElementById('login');

    if ( this.localStorage.getItem('username') != null ) {
        window.location.href = 'create.html';
    }


    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = loginForm.querySelector('#username').value;
        const password = loginForm.querySelector('#password').value;

        if (username.length < 5 || username.length > 10 || password.length < 6 || password.length > 20 ) {
            const alert = loginForm.querySelector('.alert');
            alert.classList.remove('d-none');
        }
        else {
            localStorage.setItem('username', username);
            window.location.href = 'create.html';
        }
    });
});
