import { useState } from 'react';
import React from 'react';

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
   const HomePage =()=>{
   //destructure the two values  
   const[blogs,setBlogs] = useState([
    { title:'My new website', body:'loream mjfhgig....', author:'mario',id:1 },
    {title:'welcome Party', body:'lorem ipsum....',author:'bhamini',id:2},
    {title:'webdev top tips', body:'dvnjdnv tryet....', author:'Laxshmish',id:3} 

  ]);
  return (
    <div className="home">   
    {blogs.map((blog)=>(
     <div className="blog-preview" key={blog.id}>  
             <h2>{blog.title}</h2> 
             <p>Written by {blog.author}</p>  
    </div>
    ))};

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