window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('create-form');
    const title = form.querySelector('#title');
    const author = form.querySelector('#author');
    const location = form.querySelector('#location');
    const imgLink = form.querySelector('#img-link');
    const body = form.querySelector('#body');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const valueTitle = title.value;
        const valueAuthor = author.value;
        const valueLocation = location.value;
        const valueImgLink = imgLink.value;
        const valueBody = body.value;

        createBlogPost(valueTitle, valueBody, valueAuthor, valueLocation, valueImgLink);
    });
})

blog.title, blog.body, blog.author, blog.destination, blog.date, blog.imageLink

function createBlogPost(title, body, author, destination, imageLink, ) {
    // get today's date
    const date = getTodayDate();
    const object = {
        title, body, author, destination, date, imageLink
    };
    storeToLocalStorage(object);
    window.location.href = 'search.html';
} 

function storeToLocalStorage(object) {
    // get blogs from local storage if exists or create an empty array
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    // add new blog to the array at the beginning
    blogs.unshift(object)

    localStorage.setItem('blogs', JSON.stringify(blogs))
}

function getTodayDate() {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    const today = new Date()
    const month = months[today.getMonth()]
    const day = today.getDate()
    const year = today.getFullYear()
    const formattedDate = `${month} ${day}, ${year}`
    return formattedDate;
}