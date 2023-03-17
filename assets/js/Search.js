// this is important to fetch the data from the js file
BLOGS.loadData();

window.addEventListener('DOMContentLoaded', function() {
    console.log("Search.js loaded");

    const inputsContainer = document.querySelector("#search-inputs");

    const button = inputsContainer.querySelector(".btn");
    const select = inputsContainer.querySelector("select");
    const input = inputsContainer.querySelector("input");
    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const selectValue = select.value.toUpperCase().trim();
        const inputValue = input.value.trim();
        console.log( BLOGS.getBlogs(selectValue, inputValue) );

    });
});

