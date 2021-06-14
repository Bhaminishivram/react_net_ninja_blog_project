import React from 'react';

// const BlogList = (props) => { 
//     const blogs = props.blogs; 
//    // console.log(blogs) 
//     const title = props.title; 

  // descturcturing the props directly 
   const BlogList = ({blogs,title }) =>{
    return (
        <div className="blog-list"> 
        <h2> All Blogs List !</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))};

        </div>
    );
}

export default BlogList; 