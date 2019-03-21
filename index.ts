let blogPosts: BlogPost[] = [];

const createBlogPost = () => {
    let form = document.getElementById("blog-post-form");
    let title = form["blog-title"].value;
    let post = form["blog-post"].value;

    blogPosts.push(new BlogPost(title, post));
    // console.log(blogPosts);
    console.log(title);
    outputBlog(title);
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
    let node = document.createElement("div"); 
    let textnodetitle = document.createTextNode(title);
    node.appendChild(textnodetitle)
    // let textnodepost = document.createTextNode("blog-post");
    target.appendChild(node);
}









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