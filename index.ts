let blogPosts: BlogPost[] = [];

let archive = [];

const createBlogPost = () => {
    let form = document.getElementById("blog-post-form");
    let title = form["blog-title"].value;
    let post = form["blog-post"].value;

    blogPosts.push(new BlogPost(title, post));
    // console.log(blogPosts);
    outputBlog(title);
    outputBlogBody(post);
    // moveOldPostsToArchive();
}

class BlogPost {
    blogTitle: string;
    blogPost: string;

    constructor(title: string, post: string) {
        this.blogTitle = title;
        this.blogPost = post;
    }
}

const outputBlog = (title) => {
    let target = document.getElementById('output-blog');
    let node = document.createElement("h3"); 
    let textnodetitle = document.createTextNode(title);
    node.appendChild(textnodetitle)
    // let textnodepost = document.createTextNode("blog-post");
    target.appendChild(node);
}

const outputBlogBody = (post) => {
    let target = document.getElementById('output-blog');
    let node = document.createElement("p"); 
    let textnodepost = document.createTextNode(post);
    node.appendChild(textnodepost)
    // let textnodepost = document.createTextNode("blog-post");
    target.appendChild(node);
}


// Archive - Needs Work
/* const outputBlogArchive = (title) => {
    let target = document.getElementById('archive');
    let node = document.createElement("h3"); 
    let textnodetitle = document.createTextNode(title);
    node.appendChild(textnodetitle)
    // let textnodepost = document.createTextNode("blog-post");
    target.appendChild(node);
}

const outputBlogBodyArchive = (post) => {
    let target = document.getElementById('archive');
    let node = document.createElement("p"); 
    let textnodepost = document.createTextNode(post);
    node.appendChild(textnodepost)
    // let textnodepost = document.createTextNode("blog-post");
    target.appendChild(node);
}

const moveOldPostsToArchive = () => {
    let oldPost = blogPosts[0]
    archive.push(oldPost);
    blogPosts.shift;
}

*/


// Liams code - Not clean but functional
/* const createBlogPost = () => {
    let form = document.getElementById("blog-post-form");
    let title = form["blog-title"].value;
    let post = form["blog-post"].value;
    blogPosts.push(new BlogPost(title, post));
    populateBlogPosts();
}

const printBlogPost = (blogPost: BlogPost) => {
    document.getElementById("blog-posts").innerHTML += "<p>" + blogPost.title + "</p>";
}

const populateBlogPosts = () => {
    document.getElementById("blog-posts").innerHTML = ""
    blogPosts.forEach(printBlogPost);
}

*/