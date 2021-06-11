import React from 'react'; 
const HomePage = () => { 

     const handleClick   = (e) => {
         console.log("Hello , ninjas", e);
     }
       const handleClickAgain =(name, e) =>{
         console.log("Hello" + name, e.target.value);
       }
    return ( 
        <div className="home">
          <h1> Home Page forever</h1> 
           <button onClick={handleClick}>Click me</button>  
          {/* <button onClick={handleClick()}>Click me</button> */}
          {/* <button onClick={handleClickAgain('Bhamini')}>Click me Again</button> */}  

          {/* using Arrow function in onClick Event button  */}
          {/* <button onClick={() => { 
            handleClickAgain(" Prashantha")
          }}>
        Click me Again 
          </button> */} 

<button onClick={(e) => 
            handleClickAgain(" Prashantha", e)
          }>
        Click me Again 
          </button>
        </div>
      );
}
 
export default HomePage;