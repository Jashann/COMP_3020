class BLOGS {
    static blogs = [];

    static addBlog(title, body, author, destination, date, link) {
        BLOGS.blogs.push(new Blog(title, body, author, destination, date, link));
    }

    static getBlogs(queryType, text ) {
        let results = [];
        if ( queryType == "TITLE" ) {
            results = BLOGS.blogs.filter(blog => blog.getTitle().toLowerCase().includes(text.toLowerCase()));
        }
        else if ( queryType == "BODY" ) {
            results = BLOGS.blogs.filter(blog => blog.getBody().toLowerCase().includes(text.toLowerCase()));
        }
        else if ( queryType == "AUTHOR" ) {
            results = BLOGS.blogs.filter(blog => blog.getAuthor().toLowerCase().includes(text.toLowerCase()));
        }
        else if ( queryType == "DESTINATION" ) {
            results = BLOGS.blogs.filter(blog => blog.getDestination().toLowerCase().includes(text.toLowerCase()));
        }
        else if ( queryType == "DATE" ) {
            results = BLOGS.blogs.filter(blog => blog.getDate().toLowerCase().includes(text.toLowerCase()));
        }

        return results;
    }

    static loadData() {
        console.log("BLOGS.js loaded");
        BLOGS.addBlog("Blog 1", "This is the body of blog 1", "Author 1", "Winnipeg", "January 13, 2021", "Link 1");
        BLOGS.addBlog("Blog 2", "This is the body of blog 2", "Author 2", "Winnipeg", "February 13, 2021", "Link 2");
        BLOGS.addBlog("Blog 3", "This is the body of blog 3", "Author 3", "Winnipeg", "March 13, 2021", "Link 3");
        BLOGS.addBlog("Blog 4", "This is the body of blog 4", "Author 4", "Winnipeg", "Jan 13, 2021", "Link 4");
        BLOGS.addBlog("Blog 5", "This is the body of blog 5", "Author 5", "Winnipeg", "Jan 13, 2021", "Link 5");
        BLOGS.addBlog("Blog 6", "This is the body of blog 6", "Author 6", "Toronto", "Date 6", "Link 6");
        BLOGS.addBlog("Blog 7", "This is the body of blog 7", "Author 7", "Toronto", "Date 7", "Link 7");
        BLOGS.addBlog("Blog 8", "This is the body of blog 8", "Author 8", "Toronto", "Date 8", "Link 8");
        BLOGS.addBlog("Blog 9", "This is the body of blog 9", "Author 9", "Toronto", "Date 9", "Link 9");
        BLOGS.addBlog("Blog 10", "This is the body of blog 10", "Author 10", "Toronto", "Date 10", "Link 10");
    }
}


class Blog {
    constructor(title, body, author, destination, date, link) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.date = date;
        this.link = link;
        this.destination = destination;
    }

    getTitle() {
        return this.title;
    }

    getBody() {
        return this.body;
    }

    getAuthor() {
        return this.author;
    }

    getDate() {
        return this.date;
    }

    getLink() {
        return this.link;
    }

    getDestination() {
        return this.destination;
    }
}