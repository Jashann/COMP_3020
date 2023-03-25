window.addEventListener('DOMContentLoaded', function () {

    const username = getUserName();
    const navList = document.querySelector('.navbar-nav');

    // adding nav item to the navbar
    if ( navList != null ) 
    {
        let html = `
            <li class="nav-item">
                    <a class="nav-link text-center" href="./login.html">
                    <ion-icon name="person"></ion-icon>
                    Login 
                </a>
            </li>
        
            `;
        
        if ( username != null ) {
            html = `
            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <ion-icon name="person"></ion-icon>
                        ${username} 
                    </a>
                    
                    <div class="dropdown-menu rounded-4 me-5">
                        <a class="btn btn-sm btn-info rounded-5" href="./create.html">Create Blog
                            <ion-icon size="small" name="create"></ion-icon>
                        </a>
                        <btn id="logout" class="btn btn-sm mt-2 btn-info rounded-5">Log out 
                            <ion-icon size="small"  name="log-out"></ion-icon> 
                        </btn>
            </li>
            `;       
        }
        navList.innerHTML += html;  
    }

    // logout button 
    const logoutBtn = document.querySelector('#logout');
    if ( logoutBtn != null ) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('username');
            window.location.href = './index.html';
        })
    }



    function getUserName() {
        const username = localStorage.getItem('username');
        return username;
    }

})
