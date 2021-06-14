import { useState } from 'react';
import React from 'react';
import BlogList from './BlogList';

//const HomePage = () => {  
// let name ="Bhamu"; 

//  const[name,setName]=useState('Bhamu');
//  const[age ,setAge] = useState(23);
// const handleClick = (e) => {
//   console.log("Hello , ninjas", e);
// }
// const handleClickAgain = (name, e) => {
//   console.log("Hello" + name, e.target.value);
// } 

// const handleClick =() => {  
// setName('Ramu');
// setAge(40);
//  name = " Ramu"; 
//  console.log(name);
// } 
const HomePage = () => {
  //destructure the two values  
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'loream mjfhgig....', author: 'mario', id: 1 },
    { title: 'welcome Party', body: 'lorem ipsum....', author: 'bhamini', id: 2 },
    { title: 'webdev top tips', body: 'dvnjdnv tryet....', author: 'Laxshmish', id: 8 },
    { title: 'webdev top books', body: 'ndlvnldvjo....', author: 'bhamini', id: 4 },
    { title: 'webdevelopment', body: 'nscjnjndvv....', author: 'Laxshmish', id: 5 },
    { title: 'web designer', body: 'fjeegoegir....', author: 'bhamini', id: 6 },
    { title: 'webdev tool kit', body: 'kcdjfodjojg....', author: 'mario', id: 7 }


  ]); 
  const handleDelete = (id) => {
     const newBlogs = blogs.filter(blog =>blog.id !== id);  
      setBlogs(newBlogs);   
  } 
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs !"  handleDelete={handleDelete}/>
      {/* filter */}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'bhamini')}
        title="Bhamini Blogs"  handleDelete={handleDelete}/>

      {/* <h1> Home Page forever</h1> 
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button> */}
      {/* <button onClick={handleClick()}>Click me</button> */}
      {/* <button onClick={handleClickAgain('Bhamini')}>Click me Again</button> */}

      {/* using Arrow function in onClick Event button  */}
      {/* <button onClick={() => { 
            handleClickAgain(" Prashantha")
          }}>
        Click me Again 
          </button> */}

      {/* <button onClick={(e) =>
        handleClickAgain(" Prashantha", e)
      }>
        Click me Again
          </button> */}

      {/* <button onClick ={handleClick()}>
             Click me
          </button> */}
    </div>
  );
}

export default HomePage;