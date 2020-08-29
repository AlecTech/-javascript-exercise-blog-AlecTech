/*
Title:Blog Post
Purpose:To allow user to enter new Title and Content to the web page (but only upto refresh)
Date: 26 Aug 2020
Author: Oleg Eremeev
Ciatation: 1 - to extract data from the form 
(https://javascript.info/formdata#:~:text=let%20formData%20%3D%20new%20FormData(%5B,%3A%20multipart%2Fform%2Ddata%20.)
2 - Aaron Barthel helped with an output() method.
*/


const listOfPosts = document.querySelector('#listOfPosts');
console.log(listOfPosts);
const form = document.querySelector('.form');
console.log(form);

// data for our array
let data = [
    { "id": 1, "title": "HTML5", "content": "HyperText Markup Language (version 5.)" },
    { "id": 2, "title": "CSS3", "content": "Cascading StyleSheets (version 3.)" },
    { "id": 3, "title": "Bootstrap", "content": "Bootstrap is a CSS framework, offering you a cornucopia of pre-set classes and styles out-of-the-box." },
    { "id": 4, "title": "Foundation", "content": "Foundation is a CSS framework, offering you a cornucopia of pre-set classes and styles out-of-the-box." },
    { "id": 5, "title": "Bulma", "content": "Bulma is a CSS framework, offering you a cornucopia of pre-set classes and styles out-of-the-box." },
    { "id": 6, "title": "Semantic UI", "content": "Foundation is a CSS framework, offering you a cornucopia of pre-set classes and styles out-of-the-box." },
    { "id": 7, "title": "JavaScript", "content": "Used for functionality, and handling of interactivity, in the front-end of websites." },
    { "id": 8, "title": "ECMAScript 6", "content": "A specific version of JavaScript that introduces new features like \"class\" arrow-style function." },
    { "id": 9, "title": "jQuery", "content": "A library intended to assist with backwards compatability, ease of JavaScript plugin creation, and simplification of code." },
    { "id": 10, "title": "Slick", "content": "A JavaScript library for easy sliders." },
    { "id": 11, "title": "ChartJS", "content": "A JavaScript library for easy charts." },
    { "id": 12, "title": "Axios", "content": "A JavaScript library for easy AJAX requests." },
    { "id": 13, "title": "TypeScript", "content": "A superset of JavaScript with enhanced types." },
    { "id": 14, "title": "React", "content": "A JavaScript library for managing the interactive \"view\" layer of a website application." },
    { "id": 15, "title": "Redux", "content": "When \"local\" state isn't enough, Redux provides a more \"global\" solution." },
    { "id": 16, "title": "PHP", "content": "PHP Hypertext Preprocessor language is used as a general-purpose and website application (server-side) solution." },
    { "id": 17, "title": "WordPress", "content": "The leading blogging platform on the web, powering more than 30% of websites; built in PHP." },
    { "id": 18, "title": "Databases", "content": "Used as a persistant storage solution, typically for web or software solutions." },
    { "id": 19, "title": "MySQL", "content": "A database management system utilizing an \"Structured Query Language\" for request formatting." },
    { "id": 20, "title": "C#", "content": "A programming language typically utilized for native desktop software or website applications." },
    { "id": 21, "title": ".NET CORE", "content": "A C# framework developed by Microsoft for accelerated web and desktop application development." }
  ];

console.log(data);
let articles = [];

/* create Article class for our manipulation with objects */
class Article
{
  // "constructor" is a reserved method name. Article
  // The constructor method runs when a new object is being
  // created following this blueprint / class.
  constructor ( title = "", content = "" )
  {
    this.title = title;
    this.content = content;
  }
   // creat method inside class for printing to the page at the bottom of the body
   // pushing into HTML new tags like <h2> and <p>

    printOnPage ()
    {
        const titlePage = document.createElement( 'UL' );
        titlePage.textContent = ` ${this.title} .`;
        document.body.appendChild( titlePage );

        const contentPage = document.createElement( 'UL' );
        contentPage.textContent = `${this.content}`;
        document.body.appendChild( contentPage );
    }

    // display Array of articles
    output()
    {   // Aaron had helped with an out put logic to make it look decent
        const parent = document.querySelector('#listOfPosts');
        const newLI = document.createElement('LI');
        const newART = document.createElement('ARTICLE');
        const newH2 = document.createElement('H2');
        newH2.textContent = this.title;
        const newP = document.createElement('P');
        newP.textContent = this.content;
       // const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
       // timeStamp = document.createElement('TIME'); 
        newART.appendChild(newH2);
        newART.appendChild(newP);
        newLI.appendChild(newART);
        //newP.appendChild(timeStamp);
        parent.appendChild (newLI);     
    }

}

//extract data line by line article by article (21/21) and push it to a new array list 
//called "articles" using Article class blueprint
for (const rawArticle of data)
{  
        articles.push(new Article(rawArticle.title, rawArticle.content));
}

//declare new variables to grab values from title and content form
const newTitle = document.querySelector('#title');
console.log(newTitle);
const newCont = document.querySelector('#content')
console.log(newCont);

//add event listener for "submit" button
form.addEventListener('submit', (event) => 
    {   //check every stap at the time to make sure that input data is still there
        event.preventDefault();
        console.log(event);
        // method FormData found on website 
        //https://javascript.info/formdata#:~:text=let%20formData%20%3D%20new%20FormData(%5B,%3A%20multipart%2Fform%2Ddata%20.
        let newPost = new FormData (form);
        console.log(newPost.get('title'));
        console.log(newPost.get('content'));

        let a = newPost.get('title');
        console.log(a);
        let b = newPost.get('content');
        console.log(b);
            // check if input is not empty                                            
        if ( a.length > 0 && b.length > 0)           
        {      
            // print out values that are entered by the user at the bottom of the page
            let data = new Article (a,b);
            data.output();
            const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' })      
            console.log(time);                  
        }
        else
        {
            alert("Warrning this is am empty input!");
        }    
    })
    // print out articles at refresh that were collcted by (for of - loop) on line 83
for (const article of articles)
{
    article.output();
}

