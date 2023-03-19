// this is important to fetch the data from the js file
BLOGS.loadData();

window.addEventListener('DOMContentLoaded', function() {

    const inputsContainer = document.querySelector("#search-inputs");

    const button = inputsContainer.querySelector(".btn");
    const select = inputsContainer.querySelector("select");
    const input = inputsContainer.querySelector("input");
    const form = document.querySelector("form");

    populateBlogs(BLOGS.getBlogs());

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const selectValue = select.value.toUpperCase().trim();
        const inputValue = input.value.trim();
        populateBlogs( BLOGS.getBlogs(selectValue, inputValue) );

    });
});


function populateBlogs(blogs) {
    const searchSection = document.querySelector('#search-result');
    const row = searchSection.querySelector('.row');
    let html = "";

    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        html += ` 
            <div class="mt-5 mb-2 col-6 col-lg-3">
                <div class="card rounded-4">
                    <img src="${blog.getLink()}" alt="Cover Image">
                    <div class="card-body">
                        <h5 class="my-3 mb-4 fs-5 text-info text-center text-uppercase"> ${blog.getTitle()} </h5>
                        <p class="card-text"> ${blog.getBody()} </p>
                        <p class="fs-5 mb-1"> Author: <span class="text-info"> ${blog.getAuthor()} </span> </p>
                        <p class="fs-5 mb-1"> Location: <span class="text-info"> ${blog.getDestination()} </span> </p>
                        <p class="fs-5"> Date: <span class="text-info"> ${blog.getDate()} </span> </p>
                        <a href="#" class="btn btn-sm btn-info fs-6 rounded-5">Read Now <ion-icon class="icon-small md hydrated" name="arrow-forward" role="img" aria-label="arrow forward"></ion-icon> </a>
                    </div>
                </div>
            </div>
        `
    }

    if ( blogs.length == 0  ) {
        html = `
        <div class="mt-5 rounded-3 alert alert-info" role="alert">
          We apologize, but we could not find any blogs that match your search. <br />
          Please try again with a different search criteria.
        </div>
        `
    }

    row.innerHTML = html;

}