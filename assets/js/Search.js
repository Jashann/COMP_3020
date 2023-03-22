// this is important to fetch the data from the js file
BLOGS.loadData();

window.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    const SEARCH_SECTION = "search-result";
    const HOME_SECTION = "home-blogs";

    // if the form exists, then we are on the search page
    if (form) {
        populateBlogs(BLOGS.getBlogs(), SEARCH_SECTION)
        // add event listener to the form
        form.addEventListener('submit', function (e) {
          e.preventDefault()

          const inputsContainer = document.querySelector('#search-inputs')
          const select = inputsContainer.querySelector('select')
          const input = inputsContainer.querySelector('input')

          const selectValue = select.value.toUpperCase().trim()
          const inputValue = input.value.trim()
          populateBlogs(
            BLOGS.getBlogs(selectValue, inputValue),
            SEARCH_SECTION
          )
        })

        // add event listener to the show all button
        const showAllButton = document.querySelector('#showAllBtn')
        showAllButton.addEventListener('click', function (e) {
            e.preventDefault()
            const searchSection = document.querySelector(`#${SEARCH_SECTION}`)

            if (searchSection.classList.contains('showFew'))
                showAllButton.innerHTML = `
                <span class="fs-5 me-2 mb-1">Show Few
                </span>
                <span class="fs-5">
                    <ion-icon name="arrow-up"></ion-icon>
                </span>`
            else
                showAllButton.innerHTML = `
                <span class="fs-5 me-2 mb-1">Show All
                </span>
                <span class="fs-5">
                    <ion-icon name="arrow-down"></ion-icon>
                </span>`

            searchSection.classList.toggle('showFew')   
        });
    }

    else {
        populateBlogs(BLOGS.getBlogs(), HOME_SECTION);
    }
});


function populateBlogs(blogs, searchValue) {
    const searchSection = document.querySelector(`#${searchValue}`);
    const row = searchSection.querySelector('.row');
    let html = "";

    for (let i = 0; i < blogs.length; i++) {
        const ID = blogs[i].getUniqueID();

        if (searchValue === 'home-blogs' && i == 4)
            break;

        const blog = blogs[i];
        html += ` 
            <div class="mt-5 mb-2 col-6 col-lg-3">
                <div class="card rounded-4">
                    <img src="${blog.getImageLink()}" alt="Cover Image">
                    <div class="card-body">
                        <h5 class="my-3 mb-4 fs-5 text-info text-center text-uppercase"> ${blog.getTitle()} </h5>
                        <p class="card-text text-truncate">${blog.getBody()}</p>
                        <p class="fs-5 mb-1"> Author: <span class="text-info"> ${blog.getAuthor()} </span> </p>
                        <p class="fs-5 mb-1"> Location: <span class="text-info"> ${blog.getDestination()} </span> </p>
                        <p class="fs-5"> Date: <span class="text-info"> ${blog.getDate()} </span> </p>
                        <button type="button" class="btn btn-sm btn-info fs-6 rounded-5" data-bs-toggle="modal" data-bs-target="#${ID}">
                            Read More
                            <ion-icon class="icon-small" name="arrow-forward"></ion-icon> 
                        </button>

                    </div>
                  
                    <div class="modal fade" id="${ID}" tabindex="-1" aria-labelledby="${ID}Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title text-info ms-2 fs-3" id="${blog.getAuthor()}Label"> ${blog.getTitle()} </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div class="d-flex justify-content-center">
                                        <img class="img-fluid rounded-4" src="${blog.getImageLink()}" alt="Blog Image">
                                    </div>
                                    <div class="mt-4">
                                        <p class="fs-5"> Author: <span class="text-info"> ${blog.getAuthor()} </span> </p>
                                        <p class="fs-5"> Date: <span class="text-info"> ${blog.getDate()}  </span> </p>
                                        <p class="fs-5"> Location: <span class="text-info"> ${blog.getDestination()}  </span> </p>
                                    
                                        <p> ${blog.getBody()}  </p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button  data-bs-dismiss="modal" type="button" class="btn btn-info rounded-5">Close <ion-icon name="close-circle-outline"></ion-icon> </button>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `
    }

    if ( blogs.length == 0  ) {
        html = `
        <div class="mt-5 rounded-3 alert alert-info text-lowercase" role="alert">
          <span class="text-uppercase">W</span>e apologize, but we could not find any blogs that match your search. <br />
          <span class="text-uppercase">P</span>lease try again with a different search criteria.
        </div>
        `
    }

    row.innerHTML = html;

}