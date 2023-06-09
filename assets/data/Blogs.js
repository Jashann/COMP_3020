class BLOGS {
    static blogs = [];

    static addBlog(title, body, author, destination, date, imageLink) {
        BLOGS.blogs.push(new Blog(title, body, author, destination, date, imageLink));
    }

    static getBlogs(queryType, text ) {
        let results = BLOGS.blogs;
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

        const locallyStoredBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        locallyStoredBlogs.forEach(blog => {
            BLOGS.addBlog(blog.title, blog.body, blog.author, blog.destination, blog.date, blog.imageLink);
        });


        BLOGS.addBlog(
          'Explore Winnipeg',
          'Find out what Winnipeg has to offer, from the best restaurants to the best places to visit.',
          'Jack Smith',
          'Winnipeg',
          'Jan 13, 2021',
          'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        )
        BLOGS.addBlog(
          'Welcome to Winnipeg',
          'Polar bears, poutine, and the best hockey in the world. \n Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.Polar bears, poutine, and the best hockey in the world. Winnipeg is a city that is full of surprises.',
          'John Doe',
          'Winnipeg',
          'Feb 13, 2021',
          'https://images.pexels.com/photos/3374204/pexels-photo-3374204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        )
        BLOGS.addBlog(
          'Adapting to Winnipeg',
          'Are you new to Winnipeg? Here are some tips to help you adapt to the city.',
          'Alex Smith',
          'Winnipeg',
          'Mar 13, 2021',
          'https://images.pexels.com/photos/3047413/pexels-photo-3047413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        )
        BLOGS.addBlog(
          'Explore Summerland',
          'Find out what Summerland has to offer, from the best restaurants to the best places to visit.',
          'Jashan Gill',
          'Winnipeg',
          'Jan 13, 2021',
          'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        )
        BLOGS.addBlog(
          'Explore Singapore',
          'The Lion City is a city that is full of surprises. Weave your way through the city and discover the best places to visit.',
          'Michael Jackson',
          'Singapore',
          'Jan 13, 2021',
          'https://images.pexels.com/photos/2236713/pexels-photo-2236713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        )
        BLOGS.addBlog(
          'Explore Toronto',
          'Toronto is a city that is full of surprises. Weave your way through the city and discover the best places to visit.',
          'Robert Downey Jr.',
          'Toronto',
          'Date 6',
          'https://images.pexels.com/photos/3930012/pexels-photo-3930012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        )
        BLOGS.addBlog(
          'Niagara Falls',
          'Niagara Falls explores nature at its best. The falls are a must-see for anyone visiting Toronto.',
          'Drake',
          'Toronto',
          'Date 7',
          'https://images.pexels.com/photos/1642770/pexels-photo-1642770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        )
        BLOGS.addBlog(
          'Toronto Zoo',
          'Wild animals, exotic birds, and the best zoo in the world. The Toronto Zoo is a must-see for anyone visiting Toronto.',
          'Justin Bieber',
          'Toronto',
          'Date 8',
          'https://images.pexels.com/photos/1775862/pexels-photo-1775862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        )
        BLOGS.addBlog(
          'Explore London',
          'Welcome to London, the capital of England. London is a city that is full of surprises. Weave your way through the city and discover the best places to visit.',
          'Sir Alex Ferguson',
          'London',
          'Date 9',
          'https://images.pexels.com/photos/4226593/pexels-photo-4226593.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        )
        BLOGS.addBlog(
          'Find your way around Portugal',
          'Go on a journey through Portugal and discover the best places to visit.',
          'Cristiano Ronaldo',
          'Portugal',
          'Date 10',
          'https://images.pexels.com/photos/4226919/pexels-photo-4226919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        )
    }
}


class Blog {
    constructor(title, body, author, destination, date, imageLink) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.date = date;
        this.destination = destination;
        this.imageLink = imageLink;
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

    getImageLink() {
        return this.imageLink;
    }

    getDestination() {
        return this.destination;
    }

    randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    getUniqueID() {
        return (this.title + this.author + this.randomIntFromInterval(1, 1000) ).trim().toLowerCase().replace(/ /g, "");
    }
}